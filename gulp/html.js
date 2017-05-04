'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var util=require('./util');
gulp.task('html', function () {
    return util.handleHtml([path.join(conf.paths.src, '/*.html')]);
});