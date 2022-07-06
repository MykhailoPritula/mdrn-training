const request = require("request")
module.exports = (endpoint, method, data) => {
  return new Promise((resolve, reject) => {
    const reqData = {
      url: `https://api.thinkific.com/api/public/v1/${endpoint}`,
      method: method,
      headers: {
        'X-Auth-API-Key': '2c38b5cccff89246d0311f2fd27417f3',
        'X-Auth-Subdomain': 'burnittraining',
        'Content-Type': 'application/json'
      }
    }
    if(method !== 'GET'){
      reqData.body = JSON.stringify(data)
    }
    request(reqData, (error, result, body) => {
      if (error) reject(error);
      else resolve(result)
    })
  })
}