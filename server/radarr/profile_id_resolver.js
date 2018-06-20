const Radarr = require('./radarr_api');

const ProfileIdResolver = function(source, {name}) {
    return Radarr.get('profile').then(res => {
        return res;
    }).then(res => {
        if (name !== 'undefined' && name)  {    
            return res.filter((profile) => profile.name.toLowerCase() === name.toLowerCase());
        }    
        return res;
    }).catch(e => {
        console.error(e);
    });

};

module.exports = ProfileIdResolver;