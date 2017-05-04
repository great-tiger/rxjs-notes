'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
var util = require('./util');
gulp.task('watch', ['inject'], function () {

    gulp.watch([path.join(conf.paths.src, '/*.html')], function (event) {

        if (event.path.indexOf('header.html') > 0 || event.path.indexOf('footer.html') > 0) {
            gulp.start('html');
            return;
        }
        /**
         * 这里只处理单个文件，效率比较高
         * 如果直接执行html任务，会造成browserSync刷新不及时
         */
        util.handleHtml([event.path]);
    });

    gulp.watch([
        path.join(conf.paths.src, '/**/*.scss')
    ], function (event) {
        util.handleScss([event.path]);
    });

    gulp.watch(path.join(conf.paths.src, '/**/*.js'), function (event) {
        util.handleJs([event.path]);
    });

    gulp.watch(path.join(conf.paths.src, '/images/**/*'), function (event) {
        util.handleImages([event.path]);
    });
});
