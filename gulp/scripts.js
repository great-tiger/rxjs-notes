'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var util = require('./util');

var $ = require('gulp-load-plugins')();

gulp.task('scripts',['htc'],function() {
    return util.handleJs([path.join(conf.paths.src, '/javascript/*.js')]);
});

gulp.task('htc',function(){
    return gulp.src([path.join(conf.paths.src, '/javascript/background-size.min.htc')])
           .pipe(gulp.dest(path.join(conf.paths.tmp, '/js/')));
});