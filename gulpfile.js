const { src, watch, series } = require("gulp");
const gulp = require("gulp");
const uglify = require("gulp-uglify");
/* const rename = require("gulp-rename"); */
const babel = require("gulp-babel");
const concat = require("gulp-concat");

function buildScript() {
    return src("./js/*.js")
        .pipe(concat("index.min.js"))
        /* .pipe(rename((path)=>{
            path.basename += ".min";
            path.extname = ".js";
        })) */
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("./dist"))
}

function watchTask(){
    watch(["./js/*.js", "*.js"], buildScript);
};

exports.default = series(buildScript, watchTask);