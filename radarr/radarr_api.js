const radarr = require('sonarr-api');

var Radarr = new radarr({
        hostname: process.env.RADARR_HOSTNAME,
        apiKey: process.env.RADARR_API_KEY,
        port: 7878,
        urlBase: process.env.RADARR_URLBASE
});
 
module.exports = Radarr;