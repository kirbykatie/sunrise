"use strict";

// Load plugins
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync'); // Run local web server
const reload = browserSync.reload; // Refresh local web server

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
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(webpack( require('./webpack.config.js') ))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
}

gulp.task('reload', function(done){
  browserSync.reload();
  done();
});


// Watch files
function watchFiles() {
  gulp.watch("dist/index.html", gulp.series('reload'));
  gulp.watch("app/sass/*.scss", gulp.series(css, 'reload'));
  gulp.watch("app/js/*.js", gulp.series(js, 'reload'));
}

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// Tasks
gulp.task("css", css);
gulp.task("js", js);
// watch
gulp.task("watch", watchFiles);

gulp.task('default', gulp.parallel('serve', 'watch'));