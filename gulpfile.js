var gulp = require ('gulp'),
	uglify = require ('gulp-uglify'),
	sass = require ('gulp-ruby-sass');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

// Styles Task
// styles
//gulp.task('styles', function(){
//	console.log('Runs styles');
//	});

// sass Task
// styles
gulp.task('styles', function(){
	return sass('scss/', { style: 'compressed' })
	.on('error', sass.logError)
	.pipe(gulp.dest('css'));
	});

// Watch Task
// Watches
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
	})

gulp.task('default', ['scripts', 'styles', 'watch']);