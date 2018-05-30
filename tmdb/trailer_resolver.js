const Promise = require('bluebird');
const MovieDB = Promise.promisifyAll(require('moviedb')(process.env.TMDB_API_KEY));

const TrailerResolver = function(_, {id}) {
    
    return MovieDB.movieTrailersAsync({id: id}).then(function(res) {
        console.log(res);
        if (res.youtube != undefined)
            return res.youtube;
    });
};

module.exports = TrailerResolver;