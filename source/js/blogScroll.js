$(document).ready(function(){
  showArticle(window.location.hash, false);

  $(".nav__list_link").on("click",function(e){
    e.preventDefault();
    showArticle($(this).attr("href"),true);
  })

});

$(window).scroll(function(){
  checkArticle();
});

function showArticle(article, isAnimated){
  var
    reqArticle = $(".blog__article").filter('[data-article="'+article.replace(/#/,"")+'"]');
    position = reqArticle.offset().top-29;
  if (isAnimated){
    $('body, html').animate({scrollTop: position}, 500);
  } else {
    $('body, html').scrollTop(position);
  }

}

function checkArticle(){
  $(".blog__article").each(function(){
    var
      that = $(this),
      top = that.offset().top-30,
      bottom = top+that.height(),
      scroll = $(window).scrollTop();
    if(top < scroll && bottom > scroll){
      var
        currrentArticle = that.data("article"),
      reqLink = $(".nav__list_link").filter('[href="#'+currrentArticle+'"]');
      reqLink.closest(".nav__list_item").addClass("active").siblings().removeClass("active");
      location.hash = currrentArticle;
    }
  });
}