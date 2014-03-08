'use strict';

var livereload = require('livereload'),
    connect = require('connect-livereload');

module.exports = function(oj, config) {

  if (!oj.server) {
    return;
  }

  var server;

  config = config || {};
  config.port = config.port || 35729;

  // inject browser script
  oj.server.use(connect({
    port: config.port
  }));

  oj.one('afterBuild', function() {

    // set livereload to watch the source dir
    config.watchDir = config.watchDir || process.cwd() + '/' + oj.sourcePath;

    // add extensions for livereload to watch
    config.exts = config.exts || ['ngt', 'less'];

    server = livereload.createServer(config);

    server.watch(config.watchDir);

    oj.log('Livereload is listening on port ' + config.port);
  });
};