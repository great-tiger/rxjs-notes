'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;
    var server = {
        baseDir: baseDir
    };
    browserSync.instance =browserSync.init({
        startPath: '/',
        server: server,
        browser: browser
    });
}

gulp.task('serve', ['clean-tmp','watch'], function() {
    browserSyncInit([conf.paths.tmp]);
});