#!/usr/bin/python
# -*- coding: utf-8 -*-
""" The Movie database API wrapper """

import json
import os
import logging
import requests

class TMDB(object):
    def __init__(self, key, version='3'):
        self.key = key
        self.url = 'https://api.themoviedb.org/{version}'.format(version=version)

    def _request(self, endpoint, params=None):
        logging.debug("Request {0} with params: {1}".format(endpoint, str(params)))
        
        headers = {'Content-Type': 'application/json',
            'Accept': 'application/json'}

        if params:
            params['api_key'] = self.key
        else:
            params = {'api_key': self.key}

        response = requests.get(
            self.url+endpoint,
            headers=headers,
            params=params
        )
        response.raise_for_status()
        return response.json()

    def get_popular_movies(self):
        return self._request("/movie/popular")