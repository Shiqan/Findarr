const Radarr = require('./radarr_api');
const MovieDB = require('../tmdb/tmdb_api');

const AddMovieResolver = function(source, {id}) {
    if (source !== 'undefined' && source)  {
        id = source.id;
    }

    let data = MovieDB.movieInfoAsync({id: id}).then(function(res) {
        if (res != undefined)
            return res;
    });

    let data = {
        'tmdbId': id,
        'title': data.title,
        'qualityProfileId': profileId,
        'titleSlug': data.titleSlug,
        'images': data.images,
        'monitored': true,
        'rootFolderPath': process.env.RADARR_ROOTFOLDERPATH,
        'year': data.year
    };  

    Radarr.post('movie', data).then(function (res) {

    });

    return MovieDB.movieTrailersAsync({id: id}).then(function(res) {
        if (res.youtube != undefined) {
            return res.youtube.filter(item => {
                return item.type.toLowerCase() === "trailer";
            });
        }
    });
};

module.exports = TrailerResolver;