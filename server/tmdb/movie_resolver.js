const MovieDB = require('./tmdb_api');

// { adult: false,
//     backdrop_path: '/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
//     belongs_to_collection:
//      { id: 448150,
//        name: 'Deadpool Collection',
//        poster_path: '/30c5jO7YEXuF8KiWXLg9m28GWDA.jpg',
//        backdrop_path: '/hBQOWY8qWXJVFAc8yLTh1teIu43.jpg' },
//     budget: 110000000,
//     genres:
//      [ { id: 28, name: 'Action' },
//        { id: 35, name: 'Comedy' },
//        { id: 878, name: 'Science Fiction' } ],
//     homepage: 'https://www.foxmovies.com/movies/deadpool-2',
//     id: 383498,
//     imdb_id: 'tt5463162',
//     original_language: 'en',
//     original_title: 'Deadpool 2',
//     overview: 'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
//     popularity: 490.010595,
//     poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
//     production_companies:
//      [ { id: 28788,
//          logo_path: null,
//          name: 'Genre Films',
//          origin_country: 'US' },
//        { id: 31076,
//          logo_path: null,
//          name: 'Simon Kinberg Productions',
//          origin_country: '' },
//        { id: 431,
//          logo_path: null,
//          name: 'The Donners\' Company',
//          origin_country: 'US' },
//        { id: 104228,
//          logo_path: null,
//          name: 'Maximum Effort',
//          origin_country: '' },
//        { id: 7505,
//          logo_path: '/837VMM4wOkODc1idNxGT0KQJlej.png',
//          name: 'Marvel Entertainment',
//          origin_country: 'US' },
//        { id: 25,
//          logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
//          name: '20th Century Fox',
//          origin_country: 'US' } ],
//     production_countries:
//      [ { iso_3166_1: 'CA', name: 'Canada' },
//        { iso_3166_1: 'US', name: 'United States of America' } ],
//     release_date: '2018-05-15',
//     revenue: 499445548,
//     runtime: 119,
//     spoken_languages: [ { iso_639_1: 'en', name: 'English' } ],
//     status: 'Released',
//     tagline: 'Prepare for the Second Coming.',
//     title: 'Deadpool 2',
//     video: false,
//     vote_average: 7.9,
//     vote_count: 1461 }


const MovieResolver = function(_, {id}) {
    return MovieDB.movieInfoAsync({id: id}).then(function(res) {
        if (res != undefined)
            return res;
    }).catch(e => console.error(e));
};

module.exports = MovieResolver;