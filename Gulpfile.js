'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

gulp.task('jshint', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail')
      .on('error', function() { this.emit('end'); })
    );
});

gulp.task('test', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(mocha({reporter: 'spec'})
      .on('error', function() { this.emit('end'); })
    );
});

gulp.task('watch', function() {
  gulp.watch(['./lib/*', './test/*'], ['jshint', 'test']);
});

gulp.task('default', ['jshint', 'test', 'watch']);