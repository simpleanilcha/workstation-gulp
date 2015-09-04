var gulp = require ('gulp'),
	uglify = require ('gulp-uglify'),
	sass = require ('gulp-ruby-sass'),
	plumber = require ('gulp-plumber')
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');

// function for errolog
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	//.pipe(plumber())
	.pipe(uglify())
	.on('error', errorLog)
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
	return sass('scss/', { style: 'expanded' })
	//.pipe(plumber())
	//.on('error', console.error.bind(console))
	.on('error', errorLog)
	.on('error', sass.logError)
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('css'))
	.pipe(livereload());
	});

// Image Task
// Minify images
gulp.task('image', function(){
	gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
	});

// Watch Task
// Watches
gulp.task('watch', function(){
	//livereload function
	//var server = livereload();
	livereload.listen();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
	})

gulp.task('default', ['scripts', 'styles', 'watch']);