#!/usr/bin/python
# -*- coding: utf-8 -*-
""" GraphQL """
from graphene import ID, Date, Field, Int, List, ObjectType, String, Boolean

class Movie(ObjectType):
    adult = Boolean()
    backdrop_path = String()
    genre_ids = List(String)
    overview = String()
    popularity = Int()
    poster_path = String()
    release_date = String()
    title = String()
    video = String()
    vote_average = Int()
    vote_count = Int()


class Query(ObjectType):
    movies = List(Movie)

    def resolve_movies(self, info, **kwargs):      
        logging.debug(kwargs)
        return ""