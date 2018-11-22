var { series,
      src,
      dest,
      task }      = require('gulp'),
    htmlmin       = require('gulp-htmlmin'),
    cleanCSS      = require('gulp-clean-css'),
    uglify        = require('gulp-uglify'),
    pump          = require('pump'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-sass'),
    imagemin      = require('gulp-imagemin'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    browserSync   = require('browser-sync'),
    pug           = require('gulp-pug');

var pugSource       = 'source/pug/*.pug',
    sassSource      = 'source/sass/**/*.sass',
    jsVendorSource  = 'source/js/vendors/*.js'
    jsMainSource    = 'source/js/*.js'
    imageSource     = 'source/img/*'
    faviconSource   = 'source/favicon/*';

var htmlDestination     = 'build/',
    cssDestination      = 'build/css/',
    jsDestination       = 'build/js/'
    imgDestination      = 'build/img/'
    faviconDestination  = 'build/favicon/';

// function html(cb) {
//   return src(pugSource)
//     .pipe(pug())
//     .pipe(dest(htmlDestination))
//   cb();
// }

task('html', function(cb) {
  return src(pugSource)
    .pipe(pug())
    .pipe(plumber())
    .pipe(dest(htmlDestination));
  cb();
})

exports.default = series(task('html'));
