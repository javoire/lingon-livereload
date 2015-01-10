'use strict';

var livereload = require('livereload');
var connectLr = require('connect-livereload-safe');

module.exports = function(lingon, config) {

  // add script tag injection middleware to the express server
  lingon.one('serverConfigure', function() {

    config = config || {};
    config.port = config.port || 35729;

    // inject browser script tag
    lingon.server.use(connectLr({
      port: config.port
    }));

    process.on('uncaughtException', function(error) {
      if(error.code == 'EADDRINUSE') {
        lingon.log.error('Port ' + config.port + ' is already in use, lingon-livereload could not start!');
        lingon.log.info('[Info] Try changing the port in your lingon-livereload config');
        process.exit();
      }
    });
  });

  // start the livereload server
  lingon.one('serverStarted', function() {

    var server;

    // set livereload to watch the source dir
    config.watchDir = config.watchDir || process.cwd() + '/' + lingon.config.sourcePath;

    // add extensions for livereload to watch
    config.exts = config.exts || lingon.config.directiveFileTypes.concat(Object.keys(lingon.config.extensionRewrites));

    server = livereload.createServer(config);

    server.watch(config.watchDir);

    lingon.log('Livereload is listening on port ' + config.port);
  });
};