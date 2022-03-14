// const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLSchema }= require('graphql');
// const axios = require('axios');

// const RocketType = new GraphQLObjectType({
//     name: 'Rocket',
//     fields: () => ({
//         active: { type: GraphQLBoolean},
//         cost_per_launch: { type: GraphQLInt},
//         description: { type: GraphQLString},
//         diameter: {
//             feet: { type: GraphQLInt}
//         },
//         engines: {
//             number: { type: GraphQLInt},
//             version: { type: GraphQLString},
//             version: { type: GraphQLString},
//             layout: { type: GraphQLString},
//             type: { type: GraphQLString},
//             thrust_vacuum: {
//             lbf: { type: GraphQLInt}
//             }
//         },
//         height: {
//             feet: { type: GraphQLInt}
//         },
//         id: { type: GraphQLString},
//         stages: { type: GraphQLInt},
//         success_rate_pct: { type: GraphQLInt},
//         wikipedia: { type: GraphQLString},
//         name: { type: GraphQLString},
//         boosters: { type: GraphQLInt},
//         company: { type: GraphQLString},
//         country: { type: GraphQLString},
//         first_flight: { type: GraphQLString},
//         mass: {
//             lb: { type: GraphQLInt}
//         }       
//     })  
// });

// const RootQuery = new GraphQLObjectType ({
//     name: 'RootQueryType',
//     fields: {
//         rockets: {
//             type: new GraphQLList(RocketType),
//             resolve(parent, args) {
//                 return axios.get('https://api.spacexdata.com/v4/rockets')
//                 .then(res => res.data)
//             }
//         }
//     }
// })

// module.exports = new GraphQLSchema({
//     query: RootQuery
// });