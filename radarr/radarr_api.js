const SonarrAPI = require('sonarr-api');
 
var Radarr = new SonarrAPI({
        hostname: process.env.RADARR_HOSTNAME,
        apiKey: process.env.RADARR_API_KEY,
        port: process.env.RADARR_PORT,
        urlBase: process.env.RADARR_URLBASE
});
 
module.exports = Radarr;