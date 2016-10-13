(function() {
  'use strict';

  function reverseFlip(){
    $(".mainContainer").removeClass("hover");
    $(".autorization__button").css("display","inline-block").fadeTo(1000,1);
  }

  $(".autorization__button").on("click", function(e){
    $(".mainContainer").addClass("hover");
    var that = this;
    $(that).fadeTo(1000,0);
    setTimeout(function() {$(that).css("display","none");}, 1000);
  });

  $(".indexContainer").on("click", function(e){
    if(e.target.className.indexOf("indexContainer") !== -1){
      if($(".mainContainer.hover").length){
        reverseFlip();
      }
    }
  });

  $(".mainContainer__block_links_home").on("click", function(){
    reverseFlip();
    $('.mainContainer__block_info_form')[0].reset();
  });

  $(".indexPopUp").on("click", function(e){
    if(e.target.className.indexOf("indexPopUp") !== -1){
      $('.indexPopUp').css('display','none');
    }
  });

  $(".closePopUp").on("click", function(){
    $('.indexPopUp').css('display','none');
  });

  $(".header__down_button").on("click",function(){
    $('body, html').animate({scrollTop: document.documentElement.clientHeight}, 500);
  })

  $(".toTop__button").on("click",function(){
    $('body, html').animate({scrollTop: 0}, 500);
  })

})();