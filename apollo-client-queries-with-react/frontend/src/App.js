import './App.css';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_ALL_DOGS = gql`
  query GetAllDogs {
    getAllDogs {
      name
      age
    }
  }
`

const GET_DOG_BY_NAME = gql`
  query GetDog($name: String) {
    getDog(name: $name) {
      name
      age
    }
  }
`

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_DOGS, {
  //   onCompleted: (queryData) => {
  //     console.log(queryData);
  //     const dogArray = queryData.getAllDogs;
  //     for (let i = 0; i < dogArray.length; i++) {
  //       console.log(dogArray[i].name + " is "  + dogArray[i].age + " years old");
  //     }
  //   }
  // });

  // if (loading) return null;
  // if (error) return "Error: " + error;
  const [dogInput, setDogInput] = useState("");

  const [getDogData, { loading, error, data }] = useLazyQuery(GET_DOG_BY_NAME, {
    variables: {
      name: dogInput
    },
    onCompleted: (queryData) => {
      console.log(queryData.getDog)
    },
    onError: (errorData) => {
      console.log(errorData);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog API query app</h1>
        <input type="text" onChange={(e) => setDogInput(e.target.value)} />
        <button
          onClick={() => getDogData({ variables: { name: dogInput }})}
        >
          Get Dog Data By Name
        </button>
      </header>
    </div>
  );
}

export default App;
