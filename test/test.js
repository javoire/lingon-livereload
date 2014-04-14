'use strict';

var lingon = require('lingon'),
    livereload = require('../lib/lingon-livereload');

// retarded test
describe('lingon-livereload', function() {
  it('should init', function() {
    livereload(lingon);
  });
});