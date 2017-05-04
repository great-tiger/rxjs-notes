'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var util = require('./util');
/**
 * sourcemap 会造成修改页面时，整体刷新。
 * browserSync does a full page reload when it gets anything else than css files into browserSync.stream();
 * Make sure to filter out your *.map files
 *
 * browserSync.reload中增加match条件，只匹配css，过滤掉map文件
 */
gulp.task('styles', function () {
    return util.handleScss([
        path.join(conf.paths.src, 'scss/*.scss')
    ]);
});