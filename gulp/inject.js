'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('inject', ['styles', 'scripts','assets'], function() {
    return gulp.start('html');
});