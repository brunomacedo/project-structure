import gulp from 'gulp';
import browserSync from 'browser-sync';

import './sass';
import './babel';
import './template';

import { config } from './config';

gulp.task('default', ['template', 'build', 'sass', 'min-sass'], () => {
    browserSync({
        server: './public'
    });

    // .pipe(browserSync.stream())
    gulp.watch(config.js.root, ['build']).on('change', browserSync.reload);
    gulp.watch(config.scss.root, ['sass', 'min-sass']).on('change', browserSync.reload);
    gulp.watch('src/**/*.html', ['template']).on('change', browserSync.reload);
});

gulp.task('publish', ['build', 'sass', 'min-sass']);
