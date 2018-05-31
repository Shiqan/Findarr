const MovieDB = require('./tmdb_api');
const UpcomingMovieResolver = function() {
    return MovieDB.miscUpcomingMoviesAsync().then(function(res) {
        if (res.results != undefined)
            return res.results;
    });
};

module.exports = UpcomingMovieResolver;