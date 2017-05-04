'use strict';

var gutil = require('gulp-util');
exports.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp'
};
/**
 * 错误处理程序，防止程序意外退出
 * @param title
 * @returns {Function}
 */
exports.errorHandler = function(title) {
    'use strict';

    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};