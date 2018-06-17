const path = require('path')
const express = require('express');
const engine = require('ejs-locals');
const fetch = require('apollo-fetch');

const app = express();

const uri = `http://localhost:${process.env.PORT}/graphql`;
const apolloFetch = fetch.createApolloFetch({ uri });

const query = `
    query GetPopularMovies {
        popular_movies {
            id
        title
        backdrop_path
        poster_path
        overview
        tagline
        videos {
            name
            source
        }
        }
    }
`;

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));




app.get("/", ({ data }, res) => {
    res.render("index", { data });
});

app.get('/upcoming', function (req, res) {
    res.render('index');
});

app.get('/latest', function (req, res) {
    res.render('index');
});

module.exports = app;