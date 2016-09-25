'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src([
      './source/images/**/*.*',
      '!./source/images/spriteSourse/**/*.*'
	])
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
