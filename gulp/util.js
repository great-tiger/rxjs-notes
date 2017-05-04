'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

exports.handleHtml = function (src) {
    src.push("!"+path.join(conf.paths.src, '/header.html'));
    src.push("!"+path.join(conf.paths.src, '/footer.html'));
    return gulp.src(src)
        .pipe($.inject(gulp.src(path.join(conf.paths.src, '/header.html')), {
            starttag: '<!-- inject:head:{{ext}} -->',
            transform: function (filePath, file) {
                return file.contents.toString('utf8')
            }
        }))
        .pipe($.inject(gulp.src(path.join(conf.paths.src, '/footer.html')), {
            starttag: '<!-- inject:footer:{{ext}} -->',
            transform: function (filePath, file) {
                return file.contents.toString('utf8')
            }
        }))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/')))
        .pipe(browserSync.stream());
};
exports.handleScss = function (src) {
    var sassOptions = {
        outputStyle: 'expanded'
    };
    return gulp.src(src)
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write("./"))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/css/')))
        .pipe(browserSync.reload({stream: true, match: '**/*.css'}));
};
exports.handleJs = function (src) {
    return gulp.src(src)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/js/')))
        .pipe(browserSync.reload({
            stream: true
        }));
};

exports.handleImages = function (src) {
    return gulp.src(src)
        .pipe($.imagemin())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/images')))
        .pipe(browserSync.reload({stream: true}));
};