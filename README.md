Minimal React
=============
This is a template for building React.js web apps **without browserify, babel, and JSX**.

## Installation

Clone the repo, 
<br/>npm install
<br/>open `index.html` in the browser

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
