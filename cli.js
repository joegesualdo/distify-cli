#!/usr/bin/env node
"use strict";

var path = require("path")

var parseArgv = require("parse-argv")
var args = process.argv.slice(2);
var argv = parseArgv(args)
var distifyNpmPackage = require('distify-npm-package');

console.log(argv)

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

var fullInputFilePath = path.join(process.cwd(), argv['input-file'])
var fullOutputDirPath = path.join(process.cwd(), argv['output-dir'])
// distifyNpmPackage(fullInputFilePath, fullOutputDirPath)
console.log(argv)
distifyNpmPackage(argv['input-file'], argv['output-dir'], {
  isModule: argv.hasOwnProperty('is-module'),
  isNode: argv.hasOwnProperty('is-node'),
})
