require('dotenv').config();
const { API_ENDPOINT, API_KEY } = process.env;
const axios = require('axios');

exports.handler = async function (request) {
    const options = JSON.parse(request.body);
    const { data } = await axios({
      url: `${API_ENDPOINT}`,
      params: {
        apikey: API_KEY,
        ...options
      }
    });
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};