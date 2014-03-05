'use strict';

var livereload = require('livereload');

var server;
var exts = [];

// only add unique values
function addExt(ext) {
  var exists;

  for (var i = exts.length; i--;) {
    if(exts[i] == ext) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    exts.push(ext);
  };
}

module.exports = function(oj, config) {
  config = config || {};

  oj.firstRun(function(sourceFiles) {

    // set livereload to watch the source dir
    config.watchDir = config.watchDir || process.cwd() + '/' + oj.sourcePath;

    // set livereload to watch all file extensions found in the project
    if (!config.exts) {

      // get extensions from source files
      for (var i = sourceFiles.length; i--;) {
        addExt(sourceFiles[i].name.split('.').pop());
      };

      // get extensions from processors
      for (var key in oj.preProcessors) {
        addExt(key);
      };
      for (var key in oj.postProcessors) {
        addExt(key);
      };

      config.exts = exts;
    } else {
      config.exts = config.exts; // user specified extensions
    };

    oj.log('Livereload is reporting for duty...');

    server = livereload.createServer(config);

    server.watch(config.watchDir);
  })
};