'use strict';

var oj = require('orangejuice'),
    livereload = require('../lib/orangejuice-livereload');

// retarded test
describe('orangejuice-livereload', function() {
  it('should init', function() {
    livereload(oj);
  });
});