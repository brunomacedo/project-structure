import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

import { config } from './config';
import { error, good } from './logs';

gulp.task('min-sass', () => {
    console.log(error('Compressed sass on folder:', good(config.scss.dest)));
    return gulp.src(config.scss.root)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 40 versions', '> 5%', 'Firefox ESR'] }))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(config.scss.dest));
});
