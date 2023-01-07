# GraphQL / Apollo Server Dog API

A simple Apollo Server GraphQL API that allows users to get all dogs in a data set, and then also search to see if a certain dog exists (by looking up name)

The entire application is contained within the `index.js` file.

`package.json` is a npm package file allowing us to use npm commands (npm start, etc.) and store the versions of dependencies (such as apollo-server version).

## Install

    npm install

## Start the server

    npm start


# GraphQL API

Below are some example queries of this GraphQL API

## Query to get all dogs

`query getAllDogs`

    query GetAllDogs {
      getAllDogs {
        name
        age
      }
    }

### Response

    {
      "data": {
        "getAllDogs": [
          {
            "name": "Bert",
            "age": 10
          },
          {
            "name": "Presto",
            "age": 7
          },
          {
            "name": "Felix",
            "age": 3
          }
        ]
      }
    }

## Query to get dog with name Bert

`query getDog`

    query GetDog($name: String) {
      getDog(name: $name) {
        name
        age
      }
    }

`variables`

    {
      "name": "Bert"
    }

### Response

    {
      "data": {
        "getDog": {
          "name": "Bert",
          "age": 10
        }
      }
    }
