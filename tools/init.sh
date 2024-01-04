#!/bin/sh

# Initialize certificates
CAROOT=../certificates mkcert -install

# Initialize pre-commit hooks
cp ./hooks/pre-commit .git/hooks/
