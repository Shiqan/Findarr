#!/usr/bin/python
# -*- coding: utf-8 -*-
""" Flask """

import logging
import os

from flask import Flask, jsonify

from flask_graphql import GraphQLView
from graphene import Schema
from providers import TMDB
from schema import Query

app = Flask(__name__)

tmdb = TMDB(os.environ.get('TMDB_API_KEY', None))

view_func = GraphQLView.as_view('graphql', schema=Schema(query=Query), graphiql=True)
app.add_url_rule('/graphql', view_func=view_func)

@app.route('/')
def index():
    return jsonify(tmdb.get_popular_movies())

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 5000))
