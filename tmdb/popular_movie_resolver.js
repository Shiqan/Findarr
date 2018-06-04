const MovieDB = require('./tmdb_api');

const PopularMovieResolver = function() {
    return MovieDB.miscPopularMoviesAsync().then(function(res) {
        if (res.results != undefined)
            return res.results;
    });
};

module.exports = PopularMovieResolver;