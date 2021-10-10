const axios = require('axios');

exports.handler = async function (request) {
    const params = JSON.parse(request.body);
    const { data } = await axios({
      url: `https://www.omdbapi.com?apikey=''&${params}`
    });
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};