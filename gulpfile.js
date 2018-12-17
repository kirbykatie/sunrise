"use strict";

// Load plugins
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
//const babel = require('gulp-babel');
const concat = require('gulp-concat');
//const webpack = require('webpack-stream');

// CSS task
function css() {
  return gulp
    .src('app/sass/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
}

// Transpile, concatenate and minify scripts
function js() {
  return gulp
    .src('app/js/*.js')
    .pipe(sourcemaps.init())
    /*.pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(webpack( require('./webpack.config.js') ))*/
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
}


// Watch files
function watchFiles() {
  gulp.watch("app/sass/*.scss", css);
  gulp.watch("app/js/*.js", js);
}

// Tasks
gulp.task("css", css);
gulp.task("js", js);

// build
gulp.task(
  "build",
  gulp.series(gulp.parallel(css, js))
);

// watch
gulp.task("watch", watchFiles);
gulp.task('default', gulp.parallel('watch'));