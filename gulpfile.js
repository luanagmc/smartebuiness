const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});