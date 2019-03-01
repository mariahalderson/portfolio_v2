var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
//js compilers
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


//log errors in terminal
gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});

gulp.task('coffee', function() {
  gulp.src('js/hello.coffee')
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('js'))
});

//js compilers
gulp.task('js', function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets'))
});

gulp.task('default', ['coffee', 'js']);

//watch and auto-compile **ERROR HERE**
gulp.task('run watch', function() {
  gulp.watch('js/hello.coffee', ['coffee']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('styles/main.scss', ['sass']);
});
