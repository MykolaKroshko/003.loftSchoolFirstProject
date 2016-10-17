$(function(){
  var image = $('.paralax__image'),
    headerHeight = 0;
    move = 0;
  if($('.header').length){
    headerHeight = $('.header')[0].getBoundingClientRect().height;
  }else if($('.indexContainer').length){
    headerHeight = $('.indexContainer')[0].getBoundingClientRect().height+30*45;
  }
  move = 'translate3d(-50%,'+(headerHeight/45)+'%, 0)'
  image.css({
    'transform' : move,
    '-webkit-transform' : move,
  })
});

$(window).on('scroll',function(){
  if($('.header').length){
    var scroll = $(window).scrollTop(),
      image = $('.paralax__image'),
      headerHeight = $('.header')[0].getBoundingClientRect().height,
      move = 'translate3d(-50%,'+((scroll/-45)+(headerHeight/45))+'%, 0)';
    image.css({
      'transform' : move,
      '-webkit-transform' : move,
    })
  };
});

$(window).on('mousemove',function(e){
  if($('.indexContainer').length){
    var x = e.pageX,
      y = e.pageY,
      w = (window.innerWidth/2)-x,
      h = (window.innerHeight/2)-y,
      image = $('.paralax__image'),
      move,
      headerHeight = $('.indexContainer')[0].getBoundingClientRect().height;
    move = 'translate3d('+(-50+w*(1/500))+'%,'+(h*(1/100)+(headerHeight/45)+30)+'%, 0)'
    image.css({
      'transform' : move,
      '-webkit-transform' : move,
    })
  }
});