$('.header__menuButton_openMenu').on('click',function(){
  var menuContainer = $('.humMenuContainer');
  menuContainer.addClass('visible');
  menuContainer.find('.humMenuLeftBG').animate({left:0},500);
  menuContainer.find('.humMenuRightBG').animate({right:0},500);
  menuContainer.find('.humMenu__list').fadeIn(500);
  menuContainer.find('.closeMenuHolder').fadeIn(500);
});

$('.humMenuContainer').on('click',function(){
  var $this = $(this);
  $this.find('.humMenuLeftBG').animate({left:'-50%'},500);
  $this.find('.humMenuRightBG').animate({right:'-50%'},500,function(){
    $this.removeClass('visible');
  });
  $this.find('.humMenu__list').fadeOut(500);
  $this.find('.closeMenuHolder').fadeOut(500);
});