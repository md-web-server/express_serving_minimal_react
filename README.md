Minimal React Served by Express
=============
This is a template for building React.js web apps **without browserify, babel, and JSX**.

This project sends html to the browser based on authentication logic.</br>
The user will see the unique html allowed by their security role. [specified_in_server.js](https://github.com/MichaelDimmitt/express_serving_minimal_react/blob/with-express/server.js)

## Installation

```bash
git clone https://github.com/MichaelDimmitt/express_serving_minimal_react.git
npm install
node server.js
```

## Why is this project so minimal?
This project is a learning repo for understanding how react can be implemented without webpack/browserfi, and babel transpiling your JSX.

Many use react for its readibility. This project does not have the readibility because it does not take advantage of JSX being transpiled into browser compatable javascript.

Coding is hard without babel:</br>
Correct, this project is about understanding that babel is transpiling your code into: [yikes!](https://github.com/MichaelDimmitt/express_serving_minimal_react/blob/with-express/js/helloWorldComponents.js)

Why the express server?</br>
Using an express server we can control the html being sent to the browser based on authentication logic.</br>
The user will see the unique html allowed by their security role. [specified_in_server.js](https://github.com/MichaelDimmitt/express_serving_minimal_react/blob/with-express/server.js)

## View next Project/Progression
Arguably the reasons why someone uses react: [minimal-react-starter](https://github.com/ahfarmer/minimal-react-starter.git)
<br/>This starter is as minimal as possible while still including Babel and Webpack. [why-minimal-react-starter-is-not-more-minimal](https://github.com/ahfarmer/minimal-react-starter#why-not-more-minimal)
