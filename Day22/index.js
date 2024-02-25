// Learning Web Dev
// Learning Web Dev - Day 21

// Require vs import

const fs = require('fs');

// traditional way of including modules. follows commonJS module system
// synchronous - will pause code execution until required module is loaded
// Best suited for server-side applications

// Adv - easy to use, useful when modules are reqd beofre execution
// disadv - no static analysis, no tree shaking


import fs from 'fs';

// with introduction of ES6, node added support for ES Modules(ESM).
// to use, add type: module in package.json
// is asynchronous and suited for front-end dev. can be used for server side too.

// adv - static analysis.
// disadv - incompatible with few node versions