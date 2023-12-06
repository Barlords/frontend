#!/bin/sh

sed -i "s|http://localhost:8000/|${BASE_API_URL}|g" assets/index*.js
#nginx -g 'daemon off;'
