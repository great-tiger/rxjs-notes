'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
gulp.task('clean-dist', function() {
    return $.del.sync([conf.paths.dist],{force:true});
});
gulp.task('clean-tmp', function() {
    return $.del.sync([conf.paths.tmp],{force:true});
});