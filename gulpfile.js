var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('gulp-sass', function() {
  return gulp.src('./src/styles/theme.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(/*{ outputStyle: 'compressed' }*/).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('custom.scss.liquid'))
    .pipe(replace('"{{', '{{'))
    .pipe(replace('}}"', '}}'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/'));
});

gulp.task('default', function() {
  gulp.watch(['./src/styles/**/*.scss'], gulp.series('gulp-sass'));
});