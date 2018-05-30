const Promise = require('bluebird');
const MovieDB = Promise.promisifyAll(require('moviedb')(process.env.TMDB_API_KEY));

const PopularMovieResolver = function() {
    return MovieDB.miscPopularMoviesAsync().then(function(res) {
        if (res.results != undefined)
            return res.results;
    });
};

module.exports = PopularMovieResolver;