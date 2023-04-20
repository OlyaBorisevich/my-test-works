const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const reload = browserSync.reload;
const prettify = require('gulp-html-prettify');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const csscomb = require('gulp-csscomb');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');

// pug
gulp.task('templates', function () {

    return gulp.src('./app/templates/pages/*.pug')
        .pipe(plumber({errorHandler: errorHandler(`Error in \'pug\' task`)}))
        .pipe(pug())
        .pipe(prettify({
            brace_style: 'expand',
            indent_size: 1,
            indent_char: '\t',
            indent_inner_html: true,
            preserve_newlines: true
        }))
        .pipe(gulp.dest('./html/'));
});

// reload pug
gulp.task('pug-watch', ['templates'], reload);

// style (autoprefixer, css combo, sass )
gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(plumber({errorHandler: errorHandler(`Error in \'sass\' task`)}))
        .pipe(sass())
        .pipe(gulp.dest('./html/assets/styles'))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'ie 9', 'ios 8', 'android 4'],
            cascade: false
        }))
        .pipe(csscomb())
        .pipe(gcmq())
        .pipe(gulp.dest('./html/assets/styles'))
        .pipe(reload({stream: true}));
});

// copy files (robots.txt & favicons)
gulp.task('copy-resources', function () {
    gulp.src('./app/resources/**/*')
        .pipe(gulp.dest('./html/'));
});

// run tasks
gulp.task('default', ['sass', 'templates', 'copy-resources'], function () {
    browserSync({server: './html'});
    gulp.watch([
        './app/scss/**/*.scss',
        './app/scss/*.scss'], ['sass']);
    gulp.watch([
        './app/templates/*/*.pug'], ['pug-watch']);
});
