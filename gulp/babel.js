import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

import { config } from './config';
import { warning, good } from './logs';

gulp.task('build', () => {
    console.log(warning('Building scripts on folder:', good(config.js.dest)));
    return gulp.src(config.js.root)
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('dev', () => {
    gulp.watch(config.js.root, ['build']);
});
