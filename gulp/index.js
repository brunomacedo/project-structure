import gulp from 'gulp';
import browserSync from 'browser-sync';

import './sass';
import './babel';
import './template';

import { config } from './config';

gulp.task('default', ['template', 'build', 'sass'], () => {
    browserSync({
        server: './public'
    });

    gulp.watch(config.js.src, ['build']).on('change', browserSync.reload);
    gulp.watch(config.scss.src, ['sass']).on('change', browserSync.reload);
    gulp.watch(config.template.type, ['template']).on('change', browserSync.reload);
});

gulp.task('publish', ['template', 'build', 'sass']);
