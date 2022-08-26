# Website

My personal website build using React🚀 and Tailwind CSS✨.

View the website at www.joechandler.com

## Getting Started

1. Run `yarn install`
2. Run `yarn dev`
3. Open `localhost:8080` to see the webserver.

## Deploying

The website is served from the `gh-pages` branch of the repository. Because the website is built using React, we have to build the package before serving it to Github.

In order to deploy:

1. Run `yarn predeploy` - this will build the package in the `build` folder.
2. Run `yarn deploy` - this deploys the build package to the `gh-pages` branch of the repository where it is served by Github Pages.
