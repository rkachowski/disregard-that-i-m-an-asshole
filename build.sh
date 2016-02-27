#!/usr/bin/env bash
if [[ -f pack.zip ]]; then
    rm pack.zip
fi

zip -r pack.zip key.pem icons js src manifest.json

