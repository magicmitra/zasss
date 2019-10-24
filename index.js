const axios = require('axios');
require('dotenv').config({ path: '.env' });

/**
 * Possible API endpoints to use :
 * https://fantasydata.com/api/api-documentation/nfl
 * https://www.hooksdata.io/docs/api/introduction/
 * https://www.mysportsfeeds.com/data-feeds/api-docs/ -> Good API to pull games in a given week
 * 
 */

// works
const url = `https://api.sportradar.us/nfl-t1/2019/PRE/0/den/atl/summary.json?api_key=tk5fsac8894yezpymuqw36x5`;

// works, gets a season's schedule
const url2 = `https://api.sportradar.us/nfl-t1/2018/REG/schedule.json?api_key=tk5fsac8894yezpymuqw36x5`;

// DOESNT WORK
const url3 = `https://api.sportradar.us/nfl-t1/030d37cf-b896-4f10-b16e-2a5120fef6cf/boxscore.json?api_key=tk5fsac8894yezpymuqw36x5`;

// works
const url4 = `https://api.sportradar.us/nfl-t1/2019/PRE/schedule.json?api_key=tk5fsac8894yezpymuqw36x5`;

// works
const url5 = `https://api.sportradar.us/nfl-t1/2019/REG/schedule.json?api_key=tk5fsac8894yezpymuqw36x5`;
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