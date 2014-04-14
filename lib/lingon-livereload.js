'use strict';

var livereload = require('livereload'),
    connect = require('connect-livereload-safe');

module.exports = function(lingon, config) {

  // run only in server mode
  lingon.one('serverStarted', function() {

    if (!lingon.server) {
      return;
    }

    var server;

    config = config || {};
    config.port = config.port || 35729;

    // inject browser script
    lingon.server.use(connect({
      port: config.port
    }));

    lingon.one('afterBuild', function() {

      // set livereload to watch the source dir
      config.watchDir = config.watchDir || process.cwd() + '/' + lingon.sourcePath;

      // add extensions for livereload to watch
      config.exts = config.exts || ['ngt', 'less'];

      server = livereload.createServer(config);

      server.watch(config.watchDir);

      lingon.log('Livereload is listening on port ' + config.port);
    });
  })
};