#!/usr/bin/env bash

cd ..
set -a
source .env
set +a

python src/db_scripts.py