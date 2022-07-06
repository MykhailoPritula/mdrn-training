const
  request = require("request"),
  objectToParams = obj => {
    let urlParams = '';
    for(let item in obj){
      urlParams += `${item}=${encodeURIComponent(obj[item])}&`;
    }
    urlParams = urlParams.slice(0, -1);
    return urlParams;
  }

module.exports = (endpoint, method, data) => {
  return new Promise((resolve, reject) => {
    let params = objectToParams(data);
      request({
        url: `https://api.konnektive.com/${endpoint}?${params}`,
        method: method
      }, (error, result, body) => {
        if (error) reject(error);
        else resolve(result);
      });
  });
}