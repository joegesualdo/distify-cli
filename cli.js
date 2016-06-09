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

var fullInputFilePath = path.join(process.cwd(), argv['input-file'])
var fullOutputDirPath = path.join(process.cwd(), argv['output-dir'])
// distifyNpmPackage(fullInputFilePath, fullOutputDirPath)
distifyNpmPackage(argv['input-file'], argv['output-dir'])
