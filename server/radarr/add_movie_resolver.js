const Radarr = require('./radarr_api');

const AddMovieResolver = function(source, {id, profileId}) {
    if (source !== 'undefined' && source)  {
        id = source.id;
        profileId = source.profileId;
    }

    return Radarr.get('movie/lookup/tmdb', {tmdbId: id}).then(res => {
        return res;
    }).then(res => {
        let data = {
            'tmdbId': id,
            'title': res.title,
            'qualityProfileId': profileId,
            'titleSlug': res.titleSlug,
            'images': res.images,
            'monitored': true,
            'rootFolderPath': process.env.RADARR_ROOTFOLDERPATH,
            'year': res.year
        };  

        return Radarr.post('movie', data).then(function (res) {
            return res;
        }).catch(e => {
            console.error(e);
        });  
    }).catch(e => {
        console.error(e);
    });
};

module.exports = AddMovieResolver;