var gulp = require('gulp'),
    minjs = require('gulp-uglify');
    mincss = require('gulp-clean-css');
    suffix = require('gulp-rename');
    minimg = require('gulp-imagemin');

gulp.task('minjs', function () {
  gulp.src('js/registration.js')
  .pipe(minjs())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('transferjquery', function(){
  gulp.src('js/jquery-3.2.1.min.js')
  .pipe(gulp.dest('build/js'))
});

gulp.task('mincss', function() {
  return gulp.src('css/style.css')
  .pipe(mincss())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/css/'))
});

gulp.task('minimg', function(){
  gulp.src('img/*')
  .pipe(minimg())
  .pipe(gulp.dest('build/img'))
});


gulp.task('build', ['minjs', 'mincss', 'transferjquery', 'minimg']);


