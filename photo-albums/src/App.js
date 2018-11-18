import React, { Component } from 'react';
// import routing components
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Amplify, { API, graphqlOperation, Storage }  from 'aws-amplify';
import { Grid, Header, Input, List, Segment, Form } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import aws_exports from './aws-exports';
import { withAuthenticator, Connect } from 'aws-amplify-react';
Amplify.configure(aws_exports);

// 2. NEW: Create a function we can use to 
//    sort an array of objects by a common property
function makeComparator(key, order='asc') {
  return (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0; 

    const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? (comparison * -1) : comparison
  };
}

// 3. NEW: Add an AlbumsList component for rendering 
//    a sorted list of album names
class AlbumsList extends React.Component {
  albumItems() {
    return this.props.albums.sort(makeComparator('name')).map(album =>
      <List.Item key={album.id}>
        <NavLink to={`/albums/${album.id}`}>{album.name}</NavLink>
      </List.Item>
    );
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>My Albums</Header>
        <List divided relaxed>
          {this.albumItems()}
        </List>
      </Segment>
    );
  }
}

// 4. NEW: Add a new string to query all albums
const ListAlbums = `query ListAlbums {
    listAlbums(limit: 9999) {
        items {
            id
            name
        }
    }
}`;

// 5. NEW: Add an AlbumsListLoader component that will use the 
//    Connect component from Amplify to provide data to AlbumsList
// 2. EDIT: Update AlbumsListLoader to work with subscriptions

class AlbumsListLoader extends React.Component {

  // 2a. NEW: add a onNewAlbum() function 
  // for handling subscription events
  onNewAlbum = (prevQuery, newData) => {
      // When we get data about a new album, 
      // we need to put in into an object 
      // with the same shape as the original query results, 
      // but with the new data added as well
      let updatedQuery = Object.assign({}, prevQuery);
      updatedQuery.listAlbums.items = prevQuery.listAlbums.items.concat([newData.onCreateAlbum]);
      return updatedQuery;
  }

  render() {
    return (
      <Connect 
        query={graphqlOperation(ListAlbums)}
        // 2b. NEW: Listen to our 
        // SubscribeToNewAlbums subscription
        subscription={graphqlOperation(SubscribeToNewAlbums)}
        // 2c. NEW: Handle new subscription messages
        onSubscriptionMsg={this.onNewAlbum}    
      >
        {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listAlbums) return;

          return <AlbumsList albums={data.listAlbums.items} />;
        }}
      </Connect>
    );
  }
}

// 2. NEW: Create a NewAlbum component to give us 
//    a way of saving new albums
class NewAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumName: ''
     };
   }

  handleChange = (event) => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const NewAlbum = `mutation NewAlbum($name: String!) {
      createAlbum(input: {name: $name}) {
        id
        name
      }
    }`;
    
    const result = await API.graphql(graphqlOperation(NewAlbum, { name: this.state.albumName }));
    console.info(`Created album with id ${result.data.createAlbum.id}`);
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>Add a new album</Header>
         <Input
          type='text'
          placeholder='New Album Name'
          icon='plus'
          iconPosition='left'
          action={{ content: 'Create', onClick: this.handleSubmit }}
          name='albumName'
          value={this.state.albumName}
          onChange={this.handleChange}
         />
        </Segment>
      )
   }
}

// 1. NEW: Add a string to store a subcription query for new albums
const SubscribeToNewAlbums = `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
    }
  }
`;

// Add a new query we can use to render an album's details
const GetAlbum = `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    name
  }
}
`;

// Create an AlbumDetailsLoader component
// to load the details for an album
class AlbumDetailsLoader extends React.Component {
  render() {
    return (
      <Connect query={graphqlOperation(GetAlbum, { id: this.props.id })}>
        {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
          if (!data.getAlbum) return;
          return <AlbumDetails album={data.getAlbum} />;
        }}
      </Connect>
    );
  }
}

// Create an AlbumDetails component
class AlbumDetails extends Component {
  render() {
    return (
      <Segment>
        <Header as='h3'>{this.props.album.name}</Header>
        <S3ImageUpload albumId={this.props.album.id}/> 
        <p>TODO: Show photos for this album</p>
      </Segment>
    )
  }
}

// Create an S3ImageUpload component
class S3ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uploading: false }
  }
  onChange = async (e) => {
    const file = e.target.files[0];
    const fileName = uuid();
    this.setState({uploading: true});
    const result = await Storage.put(
      fileName, 
      file, 
      {
        customPrefix: { public: 'uploads/' },
        metadata: { albumid: this.props.albumId }
      }
    );
    console.log('Uploaded file: ', result);
    this.setState({uploading: false});
  }
  render() {
    return (
      <div>
        <Form.Button
          onClick={() => document.getElementById('add-image-file-input').click()}
          disabled={this.state.uploading}
          icon='file image outline'
          content={ this.state.uploading ? 'Uploading...' : 'Add Image' }
        />
        <input
          id='add-image-file-input'
          type="file"
          accept='image/*'
          onChange={this.onChange}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}


// 6. EDIT: Change the App component to look nicer and
//    use the AlbumsListLoader component
class App extends Component {
  render() {
    return (
      <Router>
        <Grid padded>
          <Grid.Column>
            <Route path="/" exact component={NewAlbum}/>
            <Route path="/" exact component={AlbumsListLoader}/>
            <Route
              path="/albums/:albumId"
              render={ () => <div><NavLink to='/'>Back to Albums list</NavLink></div> }
            />
            <Route
              path="/albums/:albumId"
              render={ props => <AlbumDetailsLoader id={props.match.params.albumId}/> }
            />
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});