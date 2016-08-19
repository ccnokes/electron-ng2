const gulp = require('gulp');
const path = require('path');

const srcDir = './src';
const distDir = './app';

// copy over all non TS file assets to app folder
gulp.task('copy', () => {
  return gulp.src(path.join(srcDir, '/**/!(*.ts)'))
    .pipe(gulp.dest(distDir));
});

gulp.task('default', ['copy']);
