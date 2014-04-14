'use strict';

var lingon = require('lingon'),
    livereload = require('../lib/lingon-livereload');

describe('lingon-livereload', function() {
  it('should init', function() {
    livereload(lingon);
  });
});