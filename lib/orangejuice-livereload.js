'use strict';

var livereload = require('livereload');

module.exports = function(oj, config) {
  var server;

  if (config == null) {
    config = {};
  }

  config.watchDir = config.watchDir || process.cwd() + '/' + oj.sourcePath;
  config.exts = config.exts || ['ngt', 'less'] // add some non default extensions. Temporary hardcode.

  server = livereload.createServer(config);

  return server.watch(config.watchDir);
};