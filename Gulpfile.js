var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src('./lib/*')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
})

gulp.task('watch', function() {
  gulp.watch('./lib/*', ['jshint']);
})

gulp.task('default', ['jshint', 'watch']);