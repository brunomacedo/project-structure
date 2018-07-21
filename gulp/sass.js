import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

import { config } from './config';
import { error, good } from './logs';

gulp.task('sass', () => {
    console.log(error('Compressed sass on folder:', good(config.scss.dest)));
    return gulp.src(config.scss.root)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ browsers: ['last 40 versions', '> 5%', 'Firefox ESR'] }))
        .pipe(gulp.dest(config.scss.dest));
});

gulp.task('style', () => {
    gulp.watch(config.scss.root, ['sass']);
});
