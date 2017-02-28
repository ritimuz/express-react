const gulp = require('gulp')
const LiveServer = require('gulp-live-server')
const browserSync = require('browser-sync')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const babelify = require('babelify')

gulp.task('live-server', function() {
  var server = new LiveServer('server/main.js')
  server.start()
})

gulp.task('bundle', function() {
    return browserify({
      entries: "app/main.jsx",
      debug: true
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest('./.tmp'))
})

gulp.task('serve',['bundle','live-server'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  })
})
