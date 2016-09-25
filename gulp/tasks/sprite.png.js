'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function(cb) {
    var spriteData = $.gulp.src('./source/images/spriteSourse/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss'
      }));
    spriteData.img.pipe($.gulp.dest($.config.root + '/assets/sprite/png'));
    spriteData.css.pipe($.gulp.dest($.config.root + '/assets/sprite/css'));
    cb();
  });
};

