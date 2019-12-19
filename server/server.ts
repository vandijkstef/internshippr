// Deps
const express = require('express');
const graphqlHTTP = require('express-graphql');

// Schema
const schema = require('./db/schema');

// Setups
const app = express();

// Uses
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
    })
);

app.use(
    '/graphiql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

// Do
app.listen('1337', () => {
    console.log('Server started on :1337');
});
