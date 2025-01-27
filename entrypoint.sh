#!/bin/sh
set -e

# Vérifie si le projet Angular existe déjà
if [ ! -f "angular.json" ]; then
    echo "No Angular project found. You can create one inside this container."
    echo "Run the following command to create a new Angular project:"
    echo "  ng new <project-name> --directory ./"
else
    echo "Angular project found. Verifying dependencies..."

    # Vérifie si les dépendances sont installées
    if [ -z "$(ls -A 'node_modules' 2>/dev/null)" ]; then
        echo "node_modules is empty, installing dependencies..."
        bun pm untrusted allow
        bun install --frozen-lockfile
    else
        echo "node_modules already exists, skipping installation."
    fi
fi

exec "$@"
