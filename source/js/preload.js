$(function(){
  var img = [],
    ready = 0;
  $.each($('*'),function(){
    var $this = $(this),
      bg = $this.css('background-image'),
      image =  $this.is('img');

    if (bg != 'none'){
      var path = bg.replace(/.*url\("(.*)"\)/,"$1").replace(/.*linear-gradient.*/,"");
      if (path){
        img.push(path);
      }
    }
    if (image){
      var path = $this.attr('src');
      if (path){
        img.push(path);        
      }

    }
  })

  for (var i = 0; i<img.length; i++) {
    var pic = $('<img>',{
      attr : {
        src : img[i]
      }
    });
    pic.on({
      load:function(){
        setLoadValue(img.length,++ready);
      },
      error:function(){
        setLoadValue(img.length,++ready);
      }
    });
  }
  function setLoadValue (total, ready){
    var loaded = Math.ceil(ready/total*100);
    if (loaded >= 100){
      $('.preload').fadeOut(500);
    }
    $('.preload__percent').text(loaded);
  }
});