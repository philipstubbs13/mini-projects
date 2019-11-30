# Building a GraphQL Server

## What is GraphQL?

* Application layer query language
* Open sourced by Facebook in 2015
* Can be used with any type of database
* Ability to ask for exactly what you need and nothing more.
* Get multiple resources in a single request.
* Simple Query

  * The Query

  ```bash
  {
    user(id: "100"){
      name,
      email
    }
  }
  ```

  * The Data

  ```bash
  {
    "user":{
      "id":"100"
      "name":"John Doe",
      "email": "john@gmail.com"
    }
  }
  ```

* Multiple Resources

  * The Query

  ```bash
  {
    user(id: "100"){
      name,
      email,
      posts{
        title
      }
    }
  }
  ```

  * The Data

  ```bash
  {
    "user":{
      "id":"100",
      "name":"John Doe",
      "email":"john@gmail.com",
      "posts":[
        {"title":"Post 1"},
        {"title":"Post 2"}
      ]
    }
  }
  ```

* GraphQL Types
  * GraphQL APIs are organized in terms of types and fields.

  ```bash
  Type Query {
    user: User
  }

  Type User {
    name: String
    age: Int
    frints: [User]
  }
  ```

* GrapiQL Tool
  * Graphical interactive GraphQL IDE
  * Runs in the browser
  * Syntax highlighting
  * Error reporting
  * Automation & Hinting

* Supported Languages
  * C#/.NET
  * Clojure
  * Elixir
  * Erlang
  * Go
  * Java
  * Javascript/Node/Express
  * PHP
  * Python
  * Scala
  * Ruby

## Server & Express GraphQL Setup

## RootQuery & Fetching Data

* localhost:4000/graphql

* Query

```bash
{
  customer(id: "1"){
    name,
    email,
    age
  }
}


{
  customers {
    name,
    id,
    email
  }
}
```