var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var jshint = require('gulp-jshint');


gulp.task('default', ['browser-sync']);

gulp.task('lint', function() {
	return gulp.src(['controllers/**/*.js',
					 'script.js',
					 'server.js',
					 'service.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browser-sync', ['lint'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }

    });
    
	gulp.watch(["*/**.html",
				"styles/*.css",
				'controllers/*.js',
				 'script.js',
				 'server.js',
				 'service.js'])
		.on('change', browserSync.reload);
});	
