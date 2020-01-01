const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mlab database.
mongoose.connect("mongodb://phil123:phil123@ds139946.mlab.com:39946/gql-ninja", { useNewUrlParser: true } );
mongoose.connection.once("open", () => {
  console.log('connected to database.')
})

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000.")
});