const axios = require('axios');
require('dotenv').config({ path: '.env' });

/**
 * Possible API endpoints to use :
 * https://fantasydata.com/api/api-documentation/nfl
 * https://www.hooksdata.io/docs/api/introduction/
 * https://www.mysportsfeeds.com/data-feeds/api-docs/ -> Good API to pull games in a given week
 * 
 */

const season = `2019REG`;
const url = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019REG?key=${SPORTSDATAIO_API_KEY}`;
const callAPI = async () => {
    try {
        const catchCall = await axios.get(url5);
        // return catchCall.data.weeks[0]; // url2 and url4
        // return catchCall.data.weeks[1]; // url 4
        return catchCall.data.weeks.games;
        // return catchCall.data;
    } catch(err) {
        console.log(err);
    }
};

callAPI().then((data) => console.log(data));