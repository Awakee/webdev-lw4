var gulp = require('gulp'),
    minjs = require('gulp-uglify');
    mincss = require('gulp-clean-css');

gulp.task('minjs', function () {
  gulp.src('js/registration.js')
  .pipe(minjs())
  .pipe(gulp.dest('build/js/'));
});



gulp.task('mincss', function() {
  return gulp.src('css/style.css')
  .pipe(mincss())
  .pipe(gulp.dest('build/css/'))
});

gulp.task('html', function(){
  gulp.src('index.html')
  .pipe(gulp.dest('build'))
});

gulp.task('build', ['minjs', 'mincss', 'html']);


