(function() {
  'use strict';
   $(".autorization__buttonHolder_button").on("click", function(){
    $(".mainContainer").addClass("hover");
    var that = this;
    $(that).fadeTo(1000,0);
    setTimeout(function() {$(that).css("display","none"); console.log(that);}, 1000);
  });
   $(".mainContainer__block_links_home").on("click", function(){
    $(".mainContainer").removeClass("hover");
    $(".autorization__buttonHolder_button").css("display","inline-block").fadeTo(1000,1);
  });
})();