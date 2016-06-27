'use strict';

var livereload = require('livereload'),
    connectLr = require('connect-livereload-safe');

module.exports = function(lingon, config) {

  // add script tag injection middleware to the express server
  lingon.one('serverConfigure', function() {

    config = config || {};
    config.port = config.port || 35729;
    config.host = config.host || 'localhost';

    // inject browser script tag
    lingon.server.use(connectLr({
      host: 'http://' + config.host + ':' + config.port
    }));
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

    lingon.log.info('Livereload is listening on port ' + config.port);
  });
};
