'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

var jsFilter = $.filter('**/*.js', {
    restore: true
});
var cssFilter = $.filter('**/*.css', {
    restore: true
});


gulp.task('build',function (cb) {
    runSequence(['clean-tmp', 'clean-dist', 'prebuild'],['build-html','build-images'],cb);
});

gulp.task('prebuild', ['inject'], function () {
    return gulp.src([path.join(conf.paths.tmp, '/**/*')])
        .pipe(jsFilter)
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        })).on('error', conf.errorHandler('Uglify'))
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe(cssFilter.restore);
});

gulp.task('build-html', function () {
    return gulp.src([path.join(conf.paths.tmp, '/**/*.html')])
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('build-images', function () {
    return gulp.src([path.join(conf.paths.tmp, '/images/**/*')])
        .pipe(gulp.dest(path.join(conf.paths.dist, '/images')));
});