var gulp = require("gulp");
var sass = require("gulp-sass");
var Eyeglass = require("eyeglass").Eyeglass;
var sassOptions = {}; // put whatever eyeglass and node-sass options you need here.

var eyeglass = new Eyeglass(sassOptions);

eyeglass.enableImportOnce = true;

gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss")
    .pipe(sass(eyeglass.sassOptions()).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});
