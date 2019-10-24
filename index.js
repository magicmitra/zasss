const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join('.env') });

/**
 * Possible API endpoints to use :
 * https://fantasydata.com/api/api-documentation/nfl
 * https://www.hooksdata.io/docs/api/introduction/
 * https://www.mysportsfeeds.com/data-feeds/api-docs/ -> Good API to pull games in a given week
 * 
 */

const season = `2019REG`;
const url = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/${season}?key=${SPORTSDATAIO_API_KEY}`;
const callAPI = async () => {
    try {
        const catchCall = await axios.get(url);
        
        return catchCall.data;
    } catch(err) {
        console.log(err);
    }
};

callAPI().then((data) => console.log(data));