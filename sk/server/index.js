const {ApolloServer} =require('apollo-server')
const {typeDefs} = require('./schema/typeDefs')
const {resolvers} = require('./schema/resolvers.js')


const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) =>{
    console.log(`server running at the port ${url}`);
})