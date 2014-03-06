'use strict';

var oj = require('orangejuice'),
    livereload = require('../lib/orangejuice-livereload');

describe('orangejuice-livereload', function() {
  it('should init', function() {
    livereload(oj);
  });
});