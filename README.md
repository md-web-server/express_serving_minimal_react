Minimal React
=============
This is a template for building React.js web apps **without browserify, babel, and JSX**.

## Installation

Clone the repo, 
<br/>npm install
<br/>node server.js

check out [minimal-react](https://github.com/shinglyu/minimal-react)
<br/>Which does not require an npm install. Just a download and open.

## Why "with-node_modules"
HTML link's to the browser compatable javascript in the node_modules folder.
<br/>Previously it would have linked to a cdn. 
<br/>However, that cdn can go down. 
<br/>Additionally it gives the latest stable.
<br/>Using node-modules allows an easier way to quickly try out different releases.
<br/>It also enables a specific version to be defined and never changed.

Note: I have added the package-lock.json to the .gitignore. 
<br/>Your project should probably keep this file. 
<br/>However, it would be best implemented in a package-lock.json included branch.
<br/>So as not to clutter the git history.

## All scripts are brought into html document
Having everything on the same page is often a good thing.
<br/>It means that the page does not have to refresh.

However, in a really large application this app.js file 
<br/>Could easily be one million lines of code.

For a strategy regarding returning only what a user with specific roles will ever view.
<br/>make sure to check out [express_serving_minimal_react](https://github.com/MichaelDimmitt/express_serving_minimal_react), [specifically: server.js](https://github.com/MichaelDimmitt/express_serving_minimal_react/blob/master/server.js)
<br/>where only one html file will be sent to a user. but it will be the one for their security role.

