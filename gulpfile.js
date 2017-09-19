var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('defualt', function() {

});


gulp.task('scss', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
    ];
    return gulp.src('./scss/*.scss')
        .pipe(sass())
       .pipe(postcss(processors))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('browser-sync',function () {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
});

gulp.task('watch',['browser-sync','scss'], function () {
    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('*.js').on('change', browserSync.reload);

});







//---------------------------------------
//npm install --global gulp-cli         |
//npm init                              |
//npm install --save-dev gulp           |
//touch gulpfile.js                     |
//npm install gulp-sass --save-dev      |
//npm install browser-sync --save-dev   |
//npm install gulp-postcss autoprefixer |
//---------------------------------------