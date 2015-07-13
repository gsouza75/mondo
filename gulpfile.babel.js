import babel from 'gulp-babel';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';


gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
