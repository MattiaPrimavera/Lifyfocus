var gulp = require('gulp');
var rename = require('gulp-rename');
const env = process.env.NODE_ENV;
const TEMPLATES_PATH = './gulp_templates';

gulp.task('constants', function () {
  return gulp.src(`${TEMPLATES_PATH}/constants.${env}.js`)
    .pipe(rename('constants.js'))
    .pipe(gulp.dest('./src/app'))
});

gulp.task('default', ['constants'])