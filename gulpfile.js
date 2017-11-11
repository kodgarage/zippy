/**
 * Created by cl-macmini-34 on 18/04/17.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    vendors: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/angular/angular.js', 'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap-select/dist/js/bootstrap-select.js', 'node_modules/ng-dialog/js/ngDialog.js', 'node_modules/toastr/build/toastr.min.js',
        'node_modules/angular-animate/angular-animate.js', 'node_modules/angular-aria/angular-aria.js', 'node_modules/angular-material/angular-material.js', 'node_modules/moment/moment.js',
        'node_modules/ngstorage/ngStorage.min.js', 'node_modules/oclazyload/dist/ocLazyLoad.min.js', 'vendor/ngPrint/ngPrint.min.js', 'node_modules/angular-payments/lib/angular-payments.js',
        'vendor/bootstrap-dateTimePicker/bootstrap-datetimepicker.min.js', 'vendor/jquery.inputmask/dist/inputmask/inputmask.js', 'vendor/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
        'vendor/jquery.inputmask/dist/inputmask/inputmask.extensions.js', 'vendor/bootstrap-datepicker/bootstrap-datetimepicker.js', 'vendor/bootstrap-datepicker/daterangepicker.js',
        'vendor/alsql/alasql.min.js','vendor/ngclipboard/dist/clipboard.min.js','vendor/ngclipboard/dist/ngclipboard.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js'],
    scripts: ['app/main.js', 'app/shared/*/*.js', 'app/config/*.js', 'app/route.js', 'app/component/*/*.js', 'app/component/**/*.js'],

    styles: ['app/css/*.css'],

    vendorStyles: ['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/bootstrap-select/dist/css/bootstrap-select.css','node_modules/font-awesome/css/font-awesome.css',
                'node_modules/ng-dialog/css/ngDialog.css','node_modules/ng-dialog/css/ngDialog-theme-default.min.css','node_modules/toastr/build/toastr.css',
                'node_modules/angular-material/angular-material.css','vendor/bootstrap-dateTimePicker/bootstrap-datetimepicker.css','vendor/bootstrap-datepicker/bootstrap-datetimepicker.min.css',
                'vendor/bootstrap-datepicker/daterangepicker-bs3.css']
};

gulp.task('vendors', function () {
    return gulp.src(paths.vendors)
        .pipe(concat('vendorBundle.js'))
        .pipe(gulp.dest('app/dist/'));
});

gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(uglify({mangle: false}))
        .pipe(rename('componentBundle.js'))
        .pipe(gulp.dest('app/dist/'));
});


gulp.task('vendorStyles', function () {
    return gulp.src(paths.vendorStyles)
        .pipe(concat('vendorBundle.css'))
        .pipe(gulp.dest('app/dist/'));
});

gulp.task('styles', function(){
    gulp.src(paths.styles)
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('componentBundle.css'))
        .pipe(gulp.dest('./app/dist/'))
});

gulp.task('watch', function () {
    gulp.watch(paths.vendors, ['vendors']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.vendorStyles, ['vendorStyles']);
    gulp.watch(paths.styles, ['styles']);
});


gulp.task('default', ['vendors','scripts','vendorStyles']);
