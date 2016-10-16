$(function(){
  showArticle(window.location.hash, false);
  blogNav();
});

$(window).on('scroll',function(){
  if($('section.blog').length>0){
    checkArticle();
    blogNav();
  }else{
    return false;
  }
});

$(".nav__list_link").on("click",function(e){
  e.preventDefault();
  showArticle($(this).attr("href"),true);
})

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

function blogNav(){
  var nav = $('.nav__container'),
    navCoord = nav[0].getBoundingClientRect(),
    container = $('nav.nav');
    containerCoord = container[0].getBoundingClientRect(),
    showNav = document.getElementById('showNav');
  console.log('a=',navCoord,' b=',containerCoord);
  if (navCoord.top<=0){
    nav.addClass('sticky');
  }
  if (containerCoord.top>=0){
    nav.removeClass('sticky');
  }
  if (navCoord.top<=0 && (containerCoord.bottom-navCoord.bottom)<=0){
    nav.removeClass('sticky');
    nav.css('top',containerCoord.height-navCoord.height+'px');
  }
  if (navCoord.top>0 && containerCoord.top<=0){
    nav.addClass('sticky');
    nav.css('top','0');
  }
  if(document.documentElement.clientWidth<1024 && !document.getElementById('showNav').checked && containerCoord.top<=0 && containerCoord.bottom-navCoord.height>=0){
    nav.removeClass('sticky');
    nav.css('top',containerCoord.top*-1+'px');
  }
};

$('#showNav').on('change',function(){
  var nav = $('.nav__container'),
    navCoord = nav[0].getBoundingClientRect(),
    container = $('nav.nav');
    containerCoord = container[0].getBoundingClientRect();
  if(document.documentElement.clientWidth<1024 && containerCoord.top<=0 && (containerCoord.bottom-navCoord.bottom)>0){
    console.log('jsdfhg');
    if(this.checked){
      nav.addClass('sticky');
      nav.css('top','0');
      console.log('true');
    }else{
      console.log('false');
      nav.removeClass('sticky');
      nav.css('top',containerCoord.top*-1+'px');
    }
  }
});