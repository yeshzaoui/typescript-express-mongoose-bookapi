var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

var tsconfig = require('./tsconfig.json');
var config = require('./gulp.config')();
var util = require('./gulp.util');

gulp.task('tsc', function () {
  return gulp.src(config.tsFiles)
             .pipe($.typescript(tsconfig.compilerOptions))
             .pipe(gulp.dest('./built/'));
});

gulp.task('serve', ['tsc'], function () {
  $.nodemon(config.nodemonfig).on('restart', function () {
    util.infoLog('===============');
    util.successLog('Restarting ....');
    util.infoLog('===============');
  });
});

gulp.task('default', ['serve']);

// gulp.task('watch', function () {
//   gulp.watch(config.tsFiles, ['tsc']);
// });

///////////////////////////////////////////////////////////////
