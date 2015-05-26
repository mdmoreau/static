var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var config = require('../config');

// create an optimized svg sprite sheet
gulp.task('svgstore', function() {
  return gulp.src(config.svgstore.src)
    .pipe(imagemin())
    .pipe(svgstore(config.svgstore.opts))
    .pipe(gulp.dest(config.svgstore.dist));
});