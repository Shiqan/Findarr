require('dotenv').config()

describe('add', function () {
    var add;
    beforeEach(function () {
        add = require('../radarr/add_movie_resolver');
    });
    it('is a function', function () {
        console.assert(typeof add === 'function');
    });
});