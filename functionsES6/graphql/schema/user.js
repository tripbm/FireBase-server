import { gql } from "apollo-server-express";
const typeDefs = gql`
  input inputUser {
    email: String!
    password: String!
    phoneNumber: String
    name: String!
    birthday: String
    address: String
    role: String
  }

  input updateUser {
    phoneNumber: String
    name: String!
    birthday: String
    address: String
    role: String
  }

  type user {
    id: String
    email: String
    phoneNumber: String
    name: String
    birthday: String
    address: String
    role: String
  }

  type Query {
    getUser(_id: String): user
    getListUser: [user]
  }

  type Mutation {
    createUser(data: inputUser!): user!
    updateUser(_id: String!, data: updateUser): user
    deleteUser(_id: String!): Boolean
  }
`;

export default typeDefs;
