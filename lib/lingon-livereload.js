'use strict';

var livereload = require('livereload');

module.exports = function(lingon, config) {
  var server;

  config = config || {};

  lingon.one('afterBuild', function() {

    // set livereload to watch the source dir
    config.watchDir = config.watchDir || process.cwd() + '/' + lingon.sourcePath;

    // add extensions for livereload to watch
    config.exts = config.exts || ['ngt', 'less'];

    lingon.log('Livereload is reporting for duty...');

    server = livereload.createServer(config);

    server.watch(config.watchDir);
  });
};