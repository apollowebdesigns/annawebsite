var gulp = require('gulp'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');


/**
 * gulp inject task
 */
gulp.task('injectjs', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./dist/components.js', './src/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
});

gulp.task('concat', function() {
    gulp.src([
        './components/init/*.js',
        './components/app/app.js',
        './components/routing/routing.js',
        './components/home/home.js',
        './components/gallery/*.js',
        './components/inspiration/*.js',
        './components/about/about.js'
    ])
        .pipe(concat('components.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function () {
    gulp.src(['./dist/components.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/min.js'))
})

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

gulp.task('serve', ['connect', 'watch', 'concat']);

gulp.task('default', ['connect', 'watch']);