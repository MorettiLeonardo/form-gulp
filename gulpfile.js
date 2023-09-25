const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const jsmin = require('gulp-jsmin')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')

function buildStyles() {
    return gulp.src('./source/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function compressImage() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function compressJavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJavascript))
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(buildStyles))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImage))
}