var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    notify = require('gulp-notify');

var watching = false;

var mochaFail = function() {
  if (watching) { // don't kill gulp if watching...
    this.emit('end');
  }
}

var jshintFail = function() {
  if (watching) { // don't kill gulp if watching...
    this.emit('end');
  }
}

gulp.task('jshint', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail')
      .on('error', jshintFail)
    )
    .on('error', notify.onError('<%= error.message %>'));
})

gulp.task('mocha', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(mocha({reporter: 'spec'})
      .on('error', mochaFail)
    )
    .on('error', notify.onError('<%= error.message %>'));
})

gulp.task('watch', function() {
  watching = true; // CI fix
  gulp.watch(['./lib/*', './test/*'], ['jshint', 'mocha']);
})

gulp.task('default', ['jshint', 'mocha', 'watch']);