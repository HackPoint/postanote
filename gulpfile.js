var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    merge = require("merge2"),
    sass = require("gulp-sass");

gulp.task('scripts', function () {
  var tsResult = gulp.src('*.ts')
    .pipe(ts({
      declarationFiles: true,
      noExternalResolve: true,
      noImplicitAny: true,
      experimentalDecorators: true,
      out: 'main.js'
    }));

  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
  ]);
});

gulp.task('sass', function () {
  gulp.src('./content/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./content/css'));
});

gulp.task('watch', function () {
  gulp.watch('./content/sass/**/*.scss', ['sass']);
  gulp.watch('*.ts', ['scripts']);
});
