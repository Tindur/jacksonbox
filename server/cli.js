#!/usr/bin/env node
'use strict';
var meow = require('meow');
var server = require('./');

var cli = meow({
  help: [
    'Usage',
    '  server <input>',
    '',
    'Example',
    '  server Unicorn'
  ].join('\n')
});

server(cli.input[0]);
