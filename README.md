# bookmark-visualization

**Tech Dependencies**
-------------------------
Git		- Source control
Node	- Server
NPM		- backend package manager
Bower	- frontend package manager

**Getting Started**
------------------------
Install git and add to path variable
make sure node is running
git --version

Clone the git repo to a local directory
git clone https://github.com/higgins1b/bookmark-visualization.git

We are using the git-flow workflow. Reference is here:
http://nvie.com/posts/a-successful-git-branching-model/

switch to the develop branch
git checkout develop

Install node js and add node.exe to path variable
make sure node is running
node -v

Install global dependencies in project root.
At command line run the following commands
npm install -g bower	//installs bower globally
npm install -g nodemon	//installs nodemon globally. watches for changes to any files, and rebuilds app if it detects a file change.

Install project dependencies in project root.
At command line run the following commands
npm install			//installs dependencies as defined in package.json
bower install		//installs dependencies as defined in bower.json

**Run the app**
-----------------------
At the command line navigate to root of application and run
nodemon server.js
or
node server.js