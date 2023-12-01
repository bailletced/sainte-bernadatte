#!/bin/bash -x

#Show node/yarn versions
echo "----- versions"
version=$(node -v );
echo "NODE     --> "$(node -v )
echo "yarn     --> "$(yarn --version)

cd /home/app || exit 1

# fix access rights to cache:
# our yarn install created them with root owner, while process runs as node
echo "------ Remap nextuser to package.json owner (node fro files and service for production)"
export REF_OWNER_FILE=/home/app/package.json
DEV_UID="$(stat -c %u $REF_OWNER_FILE)"
export DEV_UID
DEV_GID="$(stat -c %g $REF_OWNER_FILE)"
export DEV_GID
if [ "$DEV_UID" != "0" ] || [ "$DEV_GID" != "0" ]; then
    groupmod -g "$DEV_GID" node || true
    usermod -u "$DEV_UID" -g "$DEV_GID" -d /home/app -s /bin/bash node || true
fi

yarn install
chown -R node:node /home/app

#start yarn as node
case "$NODE_ENV" in
    "development" )
        yarn dev
        ;;

    *)
        yarn install && yarn build && yarn start
    ;;
esac