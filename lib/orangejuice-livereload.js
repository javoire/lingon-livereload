'use strict';

var livereload = require('livereload');

module.exports = function(oj, config) {
  var server;

  config = config || {};

  oj.one('afterBuild', function() {

    // set livereload to watch the source dir
    config.watchDir = config.watchDir || process.cwd() + '/' + oj.sourcePath;

    // add extensions for livereload to watch
    // TODO: generate automatically from oj source files
    config.exts = config.exts || ['ngt', 'less'];

    oj.log('Livereload is reporting for duty...');

    server = livereload.createServer(config);

    server.watch(config.watchDir);
  });
};