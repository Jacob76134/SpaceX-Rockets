const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Rocket {
    cost_per_launch: Int
    description: String
    id: String
    stages: Int
    success_rate_pct: Int
    wikipedia: String
    name: String
    boosters: Int
    company: String
    country: String
    first_flight: String
    img: String
    height: Int
  }
  
  type RocketList {
    rockets: [Rocket]
  }

    type Query {
      rockets: RocketList
    }
`;

module.exports = typeDefs;