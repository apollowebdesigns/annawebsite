var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('concat', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('components', function () {
    gulp.src('./components/**/*.*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./components/**/*.*'], ['components']);
});

gulp.task('serve', ['connect', 'watch']);

gulp.task('default', ['connect', 'watch']);