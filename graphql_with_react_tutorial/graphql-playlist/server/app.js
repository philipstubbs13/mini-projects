const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mlab database.
mongoose.connect("mongodb+srv://123:123@cluster0-fipth.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );
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