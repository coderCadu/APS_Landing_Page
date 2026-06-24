const {
    src,
    dest,
    series,
    parallel,
    task,
    watch,
} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const postcss = require('gulp-postcss');
const svgmin = require('gulp-svgmin');
const autoprefixer = require('autoprefixer');

function js() {
    return src('src/assets/js/**/*.js')
        .pipe(babel({ comments: false, presets: ['@babel/env'] }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/assets/js'));
}

function html() {
    return src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

function css() {
    const plugins = [
        autoprefixer({}),
    ];
    return src('src/assets/css/**/*.css')
        .pipe(postcss(plugins))
        .pipe(concat('styles.min.css'))
        .pipe(uglifycss())
        .pipe(dest('dist/assets/css'));
}

function scss() {
    return src('src/assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('src/assets/css'));
}

function imgRaster() {
    return src(['src/assets/img/**/*.*', '!src/assets/img/**/*.svg'])
        .pipe(dest('dist/assets/img'));
}

function imgSvg() {
    return src('src/assets/img/**/*.svg')
        .pipe(svgmin({
            plugins: [
                { name: 'removeViewBox', active: false },
                { name: 'cleanupIds', active: false },
            ],
        }))
        .pipe(dest('dist/assets/img'));
}

const img = parallel(imgRaster, imgSvg);

function watchFiles(callback) {
    watch('src/assets/css/**/*.css', series(scss, css));
    watch('src/assets/scss/**/*.scss', scss);
    watch('src/assets/js/**/*.js', js);
    watch('src/assets/img/**/*.*', img);
    watch('src/', html);
    callback();
}

task('html', html);
task('css', series(scss, css));
task('scss', scss);
task('js', js);
task('img', img);
task('watch', watchFiles);
task('default', parallel(html, js, img, series(scss, css)));