const Promise = require('bluebird');
const MovieDB = Promise.promisifyAll(require('moviedb')(process.env.TMDB_API_KEY));

const MovieResolver = function() {
    return MovieDB.miscUpcomingMoviesAsync().then(function(res) {
        if (res.results != undefined)
        return res.results;
    });
};

module.exports = MovieResolver;