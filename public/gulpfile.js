var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create;

gulp.task('jshint', function() {
	return gulp.src(['./public/controllers/*.js', './public/script.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browser-sync', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./"
	        }

	    });
	gulp.watch(["*.html","*.css","*.js", "*.styl"])
		.on('change',browserSync.reload);
	});	