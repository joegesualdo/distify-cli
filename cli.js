#!/usr/bin/env node
"use strict";

var path = require("path")

var parseArgv = require("parse-argv")
var args = process.argv.slice(2);
var argv = parseArgv(args)
var distifyNpmPackage = require('distify-npm-package');

if (argv['type']) {
}
if (argv['output-dir']) {
}
if (argv['input-file']) {
}
if (argv['is-node']) {
}
if (argv['is-module']) {
}
if (argv['is-react']) {
}

var fullInputFilePath = path.join(process.cwd(), argv['input-file'])
var fullOutputDirPath = path.join(process.cwd(), argv['output-dir'])
// distifyNpmPackage(fullInputFilePath, fullOutputDirPath)
distifyNpmPackage(argv['input-file'], argv['output-dir'], {
  isModule: argv.hasOwnProperty('is-module'),
  isReact: argv.hasOwnProperty('is-react'),
  isNode: argv.hasOwnProperty('is-node'),
  addShebang: argv.hasOwnProperty('is-cli'),
})
