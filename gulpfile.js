var gulp = require ('gulp'),
	uglify = require ('gulp-uglify');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

// Styles Task
// 
gulp.task('styles', function(){
	console.log('Runs styles');
	});

gulp.task('default', ['scripts', 'styles']);