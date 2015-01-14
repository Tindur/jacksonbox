# jacksonbox

Dependencies
--------------------------------------

1. [node](http://nodejs.org/download/)
2. [grunt](https://github.com/gruntjs/grunt-cli) npm install -g grunt-cli
2. [bower](http://bower.io/) npm install -g bower

Setup
--------------------------------------

Client

Might need elevation (sudo)

```bash
cd client
npm install
bower install
```

Server

```bash
cd server
npm install
```

Running
--------------------------------------

Client

```bash
cd client 
grunt serve
```

Server (for now)

```bash
cd server
node app.js
```