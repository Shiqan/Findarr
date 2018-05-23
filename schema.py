#!/usr/bin/python
# -*- coding: utf-8 -*-
""" GraphQL """
from graphene import ID, Date, Field, Int, List, ObjectType, String
from models.roster import Roster
from models.telemetry import TelemetryData, TelemetryEvent


class Movie(ObjectType):
    movie_id = ID()
    title = String()
    trailer = String()
    createdAt = Date()
    duration = Int()


class Query(ObjectType):
    movies = List(Movie)

    def resolve_movies(self, info, **kwargs):      
        logging.debug(kwargs)
        return ""