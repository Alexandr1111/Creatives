const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browser_sync = require('browser-sync').create();
const pngquant = require('imagemin-pngquant');
const autoprefixer=require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

function compile(done) {
    gulp.src('./styles/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
            { cascade: true }))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browser_sync.stream())
    done();
}

function sync(done){
    browser_sync.init({
        server:{
            baseDir:'./'
        },
        port: 3000
    });
    done();
}

function browser_reload(done){    	//Для автоматической перезагрузки браузера
    browser_sync.reload();
    done();
}

function minifyImages(done) {
    gulp.src('./img/**/*')
        .pipe(imagemin([
            pngquant({quality: [0.4, 0.4]})
        ]))//от 0.1 до 1, меньше число-больше сжатие
        .pipe(gulp.dest('./optim_images'))
    done();
}

function watch_files(done){
    gulp.watch("./styles/scss/*", compile);
    gulp.watch("./**/*.html", browser_reload);
    gulp.watch("./scripts/**/*.js", browser_reload);
    gulp.watch("./img/**/*", minifyImages);
    done();
}

gulp.task('default', gulp.parallel(sync, watch_files, compile));