const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const autoprefixer = require('gulp-autoprefixer')
const devConfig = require('./dev.config')

gulp.task('pug', () => (
  gulp
    .src('./src/views/pages/*.pug')
    .pipe(pug({ pretty: true })))
    .pipe(gulp.dest(`./${devConfig.dest}`)
))

gulp.task('sass', () => (
  gulp
    .src('./src/scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(`./${devConfig.dest}/stylesheets`))
))

gulp.task('default', () => {
  gulp.watch('./src/views/**/*.pug', gulp.series(['pug']))
  gulp.watch('./src/scss/**/*.scss', gulp.series(['sass']))
})
