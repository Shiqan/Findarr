const Radarr = require('./radarr_api');
const MovieDB = require('../tmdb/tmdb_api');

const AddMovieResolver = function(source, {id, profileId}) {
    if (source !== 'undefined' && source)  {
        id = source.id;
        profileId = source.profileId;
    }

    let movie = MovieDB.movieInfoAsync({id: id}).then(function(res) {
        if (res != undefined)
            return res;
    });

    let data = {
        'tmdbId': id,
        'title': movie.title,
        'qualityProfileId': profileId,
        'titleSlug': movie.titleSlug,
        'images': movie.images,
        'monitored': true,
        'rootFolderPath': process.env.RADARR_ROOTFOLDERPATH,
        'year': movie.year
    };  

    console.log("POST MOVIE")
    return Radarr.post('movie', data).then(function (res) {
        return res
    });
};

module.exports = AddMovieResolver;