const MovieDB = require('./tmdb_api');
const NowPlayingMovieResolver = function() {
    return MovieDB.miscNowPlayingMoviesAsync().then(function(res) {
        if (res.results != undefined)
            return res.results;
    });
};

module.exports = NowPlayingMovieResolver;