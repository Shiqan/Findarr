const MovieDB = require('./tmdb_api');

const TrailerResolver = function(source, {id}) {
    if (source !== 'undefined' && source)  {
        id = source.id;
    }
    return MovieDB.movieTrailersAsync({id: id}).then(function(res) {
        if (res.youtube != undefined) {
            return res.youtube.filter(item => {
                return item.type.toLowerCase() === "trailer";
            });
        }
    });
};

module.exports = TrailerResolver;