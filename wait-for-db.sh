#!/bin/bash
set -e

host="$1"
port="$2"

until psql "postgresql://postgres:lab123@$host:$port/crowdfundingDB" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"
