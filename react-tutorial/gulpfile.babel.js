import gulp from 'gulp';
import webpack from 'gulp-webpack';


const DIR = {
    SRC : 'src',
    DIST : 'dist'
};

const SRC = {
    JS : DIR.SRC + '/js/*.js',
    CSS : DIR.SRC + '/css/*.css',
    HTML : DIR.SRC + '/*.html',
};

const DIST = {
    JS : DIR.DIST + '/js',
    CSS : DIR.DIST + '/css',
    HTML : DIR.DIST + '/',
}

//js
gulp.task('js', () => {
   return gulp.src(SRC.JS)
               .pipe(webpack(require('./webpack.config.js')))
               .pipe(gulp.dest(DIST.JS)) 
});

//html
gulp.task('html', () => {
   return gulp.src(SRC.HTML)
               .pipe(gulp.dest(DIST.HTML)) 
});
//watch
gulp.task('watch', () => {
    gulp.watch(SRC.JS, ['js']);
    gulp.watch(SRC.HTML, ['html']); 
});

gulp.task('default', ['js', 'html', 'watch'], () => {
    console.log('gulp starting...');
});
