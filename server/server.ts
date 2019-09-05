// Deps
const express = require('express');
const graphqlHTTP = require('express-graphql');

// Schema
const schema = require('./schema');

// Setup
const app = express();

// Use
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
