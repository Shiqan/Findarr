const Promise = require('bluebird');
const MovieDB = Promise.promisifyAll(require('moviedb')(process.env.TMDB_API_KEY));

module.exports = MovieDB;