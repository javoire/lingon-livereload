var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    notify = require('gulp-notify');

gulp.task('jshint', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail')
      .on('error', function() { this.emit('end') }) // don't kill gulp
    )
    .on('error', notify.onError('<%= error.message %>'));
})

gulp.task('mocha', function() {
  return gulp.src(['./lib/*', './test/*'])
    .pipe(mocha({reporter: 'spec'})
      .on('error', function() { this.emit('end') })
    )
    .on('error', notify.onError('<%= error.message %>'));
})

gulp.task('watch', function() {
  gulp.watch(['./lib/*', './test/*'], ['jshint', 'mocha']);
})

gulp.task('default', ['jshint', 'mocha', 'watch']);