#!/bin/bash

# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist -b gh-pages

echo "Deployed to GitHub Pages!"