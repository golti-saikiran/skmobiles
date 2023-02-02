const { gql } = require('apollo-server')

const typeDefs = gql`

    

     type Features{
        ram: Int!
        memory: Int!
        processor: String!
        os: String!
        screensize: String!
        display: String!
        battery: Int!
        weight: Int!
        warranty: Int!
     }

    type Mobile {
        id:Int!
        name: String!
        price: Int!
        url1: String!
        url2: String!
        colors: [String!]!
        features: Features!
        
    }

    type Query{
        mobiles:[Mobile]!
        mobileById(id:Int!): Mobile
        mobileByName(name:String!):Mobile
    }
    input AddMobile {
        name:String!,
        price:Int!
    }
    input ModifyPrice {
        id:Int!,
        price:Int!
    }
    type Mutation{
        addMobile(input:AddMobile!): Mobile,
        modifyPrice(input:ModifyPrice!):Mobile,
        deleteMobile(id:Int!):[Mobile]!
    }

`
module.exports = { typeDefs }