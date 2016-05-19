// make sure to run npm install when pulling from GitHub

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');

gulp.task('jshint', function() {
	return gulp.src(['./public/controllers/*.js', './public/script.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

