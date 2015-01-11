var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 1337,
    livereload: true
  });
});

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('dist/js/main.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('index.html', ['html']);
  gulp.watch('dist/js/*.js', ['js']);
});

gulp.task('default', ['connect', 'less', 'watch']);