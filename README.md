# GIPHY App
> Recreation of GIPHY Web App

## Installing / Getting started

To get started, you need a JavaScript package manager such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

```shell
https://github.com/berksafran/giphy-study.git
cd giphy-study/
yarn install
yarn run build
```

This creates a build directory with a production build of your app. Set up your favorite HTTP server to serve this folder so that you can start using production build.

## Developing

### Built With

[React](https://github.com/facebook/react), [Create-React-App](https://github.com/facebook/create-react-app), [styled-components](https://styled-components.com/)

### Prerequisites

You need a JavaScript package manager such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to start developing.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
https://github.com/berksafran/giphy-study.git
cd giphy-study/
yarn install
yarn start
```

Then open the localhost url that you see on the terminal to view Giphy Study App.

### Building

When you’re ready to deploy to production, create a minified bundle with:

```shell
yarn run build
```

Builds Giphy Study App for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Giphy Study App is ready to be deployed.

### Components

Every component folder contains an `index.js` file that exports by default the component and a `styles` folder that contains `styles\styles.js` files which are created by `styled-components`

### Services

Services folder is the folder that we keep our service files such as API, LocalStorage, Custom React Hook (for infinitive scroll) etc.

### Theme

This app also supports theme. You can edit `src/themes/dark.js` file for Dark theme or `src/themes/light.js` file for Light theme. Initial theme is `Light`

### Routing

Routing is done by `App.js` file in the `src` folder. I used [react-router v4](https://github.com/ReactTraining/react-router) for routing.