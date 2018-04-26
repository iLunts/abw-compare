// var gp = require('gulp-load-plugins')();
// var changed = require('gulp-changed');
// var grep = require('gulp-grep');
// var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var csso = require('gulp-csso');
var concatCss = require('gulp-concat-css');
var clean = require('gulp-clean');
var styleInject = require("gulp-style-inject");
var checkCSS = require('gulp-check-unused-css');
var uncss = require('gulp-uncss');

// ------------------
// Path
// ------------------
var paths = {
    dirs: {
        build: '.build',
        style: './content/css/'
    },
    html: '*.html',
    images: 'content/img/**/*.{JPG,jpg,png,gif}',
    less: 'websrc/less/**/*.less',
};


// ------------------
// Tasks
// ------------------
// gulp.task('clean', function () {
//     return gulp.src('./content/css/')
//         .pipe(clean({ force: true }))
//         .pipe(gulp.dest('content'));
// });

gulp.task('css.check', function () {
    return gulp.src(['content/css/*.css', 'index.html'])
        .pipe(checkCSS());
});

gulp.task('css.unused', function () {
    return gulp.src('content/css/site.min.css')
        .pipe(uncss({
            html: ['./index.html']
        }))
        .pipe(gulp.dest('./out'));
});

gulp.task('css.clean', function () {
    return gulp.src([
            'content/css/', 
            'websrc/less/*.css'
        ], { 
            read: false,
            allowEmpty: true 
            })
        .pipe(clean());
});

gulp.task('less', gulp.series(['css.clean'], function () {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(concatCss('site.min.css'))
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: false
        }))
        .pipe(gulp.dest(paths.dirs.style))
}));

gulp.task('css.inject', function () {
    return gulp.src("index.html")
        .pipe(styleInject())
        .pipe(gulp.dest("./build"));
});

gulp.task('watch:styles', function () {
    gulp.watch(paths.less, 'less');
});

// gulp.task('watch', gulp.series('watch:styles'));

gulp.task("watch", gulp.series("less", function anotherFunctionOrAnonymous() {
    gulp.watch("websrc/less/**/*.less", gulp.parallel('less'));
}));
