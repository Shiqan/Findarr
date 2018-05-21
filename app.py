#!/usr/bin/python
# -*- coding: utf-8 -*-
""" Flask """

from flask import Flask, jsonify
import os
import logging
from providers import TMDB
app = Flask(__name__)

tmdb = TMDB(os.environ.get('TMDB_API_KEY', None))

@app.route('/')
def index():
    return jsonify(tmdb.get_popular_movies())

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 5000))