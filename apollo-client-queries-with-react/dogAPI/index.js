const { ApolloServer, gql } = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');

const typeDefs = gql`
  type Dog {
    name: String
    age: Int
  }

  type Query {
    getAllDogs: [Dog]
    getDog(name: String): Dog
  }
`;

const dogs = [
    {
        name: 'Bert',
        age: 10,
    },
    {
        name: 'Presto',
        age: 7,
    },
    {
        name: 'Felix',
        age: 3,
    }
];

const resolvers = {
    Query: {
        getAllDogs: () => {
            return dogs;
        },
        getDog: (_, { name }) => {
            // Check to see if the inputted name matches a dog in our data
            let dog = dogs.filter( dog => dog.name === name );
            console.log(dog);
            if (dog.length > 0) {
                // If we have a dog, return it to the user!
                return dog[0];
            } else {
                // If we don't have a dog, return an error saying there is no dog with that name
                return new ApolloError('No dog with the name ' + name, 'DOG_DOESNT_EXIST');
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});