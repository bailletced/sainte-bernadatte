#!/bin/sh

action=$3

while getopts e: flag
do
    case "${flag}" in
        e) env=${OPTARG};;
    esac
done

if [ "$env" != "prod" ] && [ "$env" != "dev" ]; then
    echo "only prod or dev env are accepted."
    exit 1
fi

if [ "$action" != "up" ] && [ "$action" != "build" ]; then
    echo "you can only up or build container"
    exit 1
fi

echo "docker compose -f docker-compose.yml -f docker-compose.$env.yml $action"
docker compose -f docker-compose.yml -f docker-compose.$env.yml $action