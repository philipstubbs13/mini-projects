# Building a GraphQL Server

## What is GraphQL

* Application layer query language
* Open sourced by Facebook in 2015.
* Can be used with any type of database.
* Ability to ask for exactly what you need and nothing more.
* Get multiple resources in a single request.

* Simple Query

The Data

```bash
"user":{
  "id":"100",
  "name":"John Doe",
  "email":"john@gmail.com"
}
```

The Query

```bash
{
  user(id:"100"){
    name,
    email
  }
}
```

* GraphQL APIs are organized in terms of types and fields.

```bash
Type Query {
  user: User
}
```

```bash
Type User {
  name: String
  age: Int
  friends: [User]
}
```

* GraphiQL Tool
  * Graphical interactive GraphQL IDE
  * Runs in the browser
  * Syntax highlighting
  * Error reporting
  * Automation and hinting

* Project Plan
  * Build the back end server
  * Setup Express with Express-Graphql
  * Create schema file with queries and mutations
  * Implement JSON-Server
  * CRUD functionality
  * test with Graphiql

## Server and Express GraphQL Setup

```bash
npm install express express-graphql nodemon graphql
```

```bash
{
  customer(id: "1"){
    name,
    email,
    age
  }
}
```

```bash
{
  customers{
    name
    id,
    email
  }
}
```


```bash
npm install json-server axios
```

```bash
{
  customer(id: "4"){
    name,
    email,
    age
  }
}
```

```bash
{
  customers{
    name,
    age
  }
}
```

```bash
mutation{
  addCustomer(name: "Harry White", email: "harry@gmail.com", age: 34){
    id,
    name,
    email
  }
}
```

```bash
mutation{
  deleteCustomer(id: "4"){
    id
  }
}
```

```bash
mutation{
  editCustomer(id: "2", age:50){
    id,
    name,
    age
  }
}
```