'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var util=require("./util")
gulp.task('assets', function () {
    return util.handleImages([path.join(conf.paths.src, '/images/**/*')]);
});