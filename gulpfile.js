'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('build', function () {
  return gulp.src('./ngxb-styles/ngxb-ui.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/ngxb-ui'));
});

gulp.task('default', gulp.series(['build']));