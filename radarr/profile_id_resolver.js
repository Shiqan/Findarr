const Radarr = require('./radarr_api');

const ProfileIdResolver = function() {
    return Radarr.get('profile').then(res => {
        return res;
    }).catch(e => {
        console.error(e);
    });
};

module.exports = ProfileIdResolver;