var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
//js compilers
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task("sass", function() {
  return gulp
    .src("./styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./assets"));
});

gulp.task("coffee", function() {
  return gulp.src("js/hello.coffee")
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest("js"));
});

//js compilers
gulp.task("js", function() {
  return gulp.src("js/*.js")
  .pipe(uglify())
  .pipe(concat("script.js"))
  .pipe(gulp.dest("assets"));
});

// gulp.task('default', ['coffee', 'js']);

// //watch and auto-compile **ERROR HERE**
// gulp.task("watch", function() {
//   gulp.watch("js/hello.coffee", ["coffee"]);
//   gulp.watch("js/*.js", ["js"]);
//   gulp.watch("styles/main.scss", ["sass"]);
// });
