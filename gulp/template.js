import gulp from 'gulp';
import htmlPartial from 'gulp-html-partial';
import { config } from './config';
import { error, good } from './logs';

gulp.task('template', () => {
    console.log(error('Template has built on:', good(config.template.dest)));
    return gulp.src([config.template.root])
        .pipe(htmlPartial(config.template.defaults))
        .pipe(gulp.dest(config.template.dest));
});
