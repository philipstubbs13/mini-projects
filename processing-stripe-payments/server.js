const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const stripe = require('stripe')('sk_test_ROZVr6wqaz8NDuajSIUeaFHa');

const FRONTEND_DOMAIN = "http://localhost:3000";

(async function () {
    const typeDefs = gql`
        type Query {
            createCheckoutSession: String
        }
    `

    const resolvers = {
        Query: {
            createCheckoutSession: async () => {
                const session = await stripe.checkout.sessions.create({
                    line_items: [
                        {
                            price: 'price_1MNBFpGfQfzL3bX7ZVdYwGvY',
                            quantity: 1
                        },
                    ],
                    mode: 'payment',
                    success_url: FRONTEND_DOMAIN + "/success",
                    cancel_url: FRONTEND_DOMAIN + "/cancel"
                });

                return JSON.stringify({
                    url: session.url
                })

            }
        }
    }

    const app = express();
    app.use(express.static('public'));
    var corsOptions = {
        origin: FRONTEND_DOMAIN,
        credentials: true
    };
    app.use(cors(corsOptions));

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();
    console.log("Server started!");
    await server.applyMiddleware({ app, path: "/graphql", cors: false });

    app.listen({ port: 4000 }, () =>
        console.log("Server is ready at http://localhost:4000" + server.graphqlPath)
    )
})();