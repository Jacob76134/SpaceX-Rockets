const axios = require('axios');
const { description } = require('./schema');


const resolvers = {
    Query: {
        rockets: async (parent, args) => {
            const response = await axios({
                method: "get",
                url: "https://api.spacexdata.com/v4/rockets/",
                responseType: "json"
            })
            // console.log(`we fetched ${response.data}`)
            const dataResponse = response.data
            const formatData = [];
            for (let i = 0; i< dataResponse.length; i++) {
                rocket = {
                    name: dataResponse[i].name,
                    description: dataResponse[i].description,
                    img: dataResponse[i].flickr_images[0],
                    height: parseInt(dataResponse[i].height.feet),
                    success_rate_pct: dataResponse[i].success_rate_pct,
                    stages: dataResponse[i].stages,
                    boosters: dataResponse[i].boosters,
                    first_flight: dataResponse[i].first_flight,
                    wikipedia: dataResponse[i].wikipedia
                }
                formatData.push(rocket)
            } 
            console.log(formatData)
            return {
                rockets: formatData 
            };
        }
    }
}

module.exports = resolvers;