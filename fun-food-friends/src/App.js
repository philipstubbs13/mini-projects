import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // When the user signs in, this checks the Firebase database to see if they were already previously authenticated. If they were, we set their user details back into the state.
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });

    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
      console.log(items);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // We call the signOut method on auth, and then using the Promise API we remove the user from our application's state. With this.state.user now equal to null, the user will see the Log In button instead of the Log Out button.
  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  // Handles authentication with firebase.
  // Here we call the signInWithPopup method from the auth module, and pass in our provider (remember this refers to the Google Auth Provider). Now, when you click the 'login' button, it will trigger a popup that gives us the option to sign in with a Google account
  // signInWithPopup has a promise API that allows us to call .then on it and pass in a callback. This callback will be provided with a result object that contains, among other things, a property called .user that has all the information about the user who has just successfully signed in - including their name and user photo. We then store this inside of the state using setState.
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        console.log(result);
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  // Here, instead of grabbing all of the items as we did before when adding a new item, we instead look up a specific item by its key (that strange -Kk8lHSMqC5oP6Qai0Vx key from before). We can then call firebase.database()'s remove method, which strips it from the page.
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  handleSubmit(e) {
    // we need to prevent the default behavior of the form, 
    // which if we don't will cause the page to refresh when you hit the submit button.
    e.preventDefault();
    // we need to carve out a space in our Firebase database where we'd like to store
    // all of the items that people are bringing to the potluck.
    // We do this by calling the ref method and passing in the destination
    // we'd like them to be stored (items).
    const itemsRef = firebase.database().ref('items');
    // here we grab the item the user typed in (as well as their username) from the state,
    // and package it into an object so we ship it off to our Firebase database.
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    // similar to the Array.push method, 
    // this sends a copy of our object so that it can be stored in Firebase
    itemsRef.push(item);
    // This clears out the inputs so that an additional item can be added.
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              {/* If the value of user is truthy, then it means that the user is currently logged in and should see the logout button. If the value of user is null, it means that the user is currently logged out and should see the log in button. */}
              {this.state.user ?
                <button onClick={this.logout}>Log Out</button>                
                :
                <button onClick={this.login}>Log In</button>              
              }
              
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.currentItem} />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>brought by: {item.user}</p>
                    <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                  </li>
                )
              })}
            </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;