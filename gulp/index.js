import gulp from 'gulp';

import './sass';
import './babel';

gulp.task('default', ['dev', 'style']);
gulp.task('publish', ['build', 'sass', 'min-sass']);
