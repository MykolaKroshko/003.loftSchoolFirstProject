$(window).on('load',function(){
  var currentCount = 0,
    descCount = 0,
    downCount = $('.slider__item_down').length-1,
    upCount;
  $('.slider__item_current').first().addClass('active');
  $('.slider__item_description').first().addClass('active');
  $('.slider__item_down').last().addClass('active');
  if($('.slider__item_up').length > 1){
    $('.slider__item_up').eq(1).addClass('active');
    upCount = 1;
  }
  else{
    $('.slider__item_up').first().addClass('active');
    upCount = 0;
  }

  $('.slider__img_down').on('click',function(){
    var slider = $(this).closest('.slider'),
      
      currentList = slider.find('.slider__item_current'),
      descriptionList = slider.find('.slider__item_description'),
      downList = slider.find('.slider__item_down'),
      upList = slider.find('.slider__item_up'),
      
      currentActive = currentList.filter('.active'),
      descriptionActive = descriptionList.filter('.active'),
      downActive = downList.filter('.active'),
      upActive = upList.filter('.active');

    downList.filter('.wasActive').removeClass('wasActive');
    upList.filter('.wasActive').removeClass('wasActive');

    currentCount <= 0 ? currentCount = currentList.length-1 : currentCount--;
    descCount <= 0 ? descCount = descriptionList.length-1 : descCount--;
    downCount <= 0 ? downCount = downList.length-1 : downCount--;
    upCount <= 0 ? upCount = upList.length-1 : upCount--;

    currentList.eq(currentCount).addClass('active');
    descriptionList.eq(descCount).addClass('active');
    downList.eq(downCount).addClass('active');
    upList.eq(upCount).addClass('active');

    currentActive.removeClass('active');
    descriptionActive.removeClass('active');
    downActive.removeClass('active').addClass('wasActive');
    upActive.removeClass('active').addClass('wasActive');
  });


  $('.slider__img_up').on('click',function(){
    var slider = $(this).closest('.slider'),
      
      currentList = slider.find('.slider__item_current'),
      descriptionList = slider.find('.slider__item_description'),
      downList = slider.find('.slider__item_down'),
      upList = slider.find('.slider__item_up'),
      
      currentActive = currentList.filter('.active'),
      descriptionActive = descriptionList.filter('.active'),
      downActive = downList.filter('.active'),
      upActive = upList.filter('.active');

    downList.filter('.wasActive').removeClass('wasActive');
    upList.filter('.wasActive').removeClass('wasActive');

    currentCount >= currentList.length-1 ? currentCount = 0 : currentCount++;
    descCount >= descriptionList.length-1 ? descCount = 0 : descCount++;
    downCount >= downList.length-1 ? downCount = 0 : downCount++;
    upCount >= upList.length-1 ? upCount = 0 : upCount++;

    currentList.eq(currentCount).addClass('active');
    descriptionList.eq(descCount).addClass('active');
    downList.eq(downCount).addClass('active');
    upList.eq(upCount).addClass('active');

    currentActive.removeClass('active');
    descriptionActive.removeClass('active');
    downActive.removeClass('active').addClass('wasActive');
    upActive.removeClass('active').addClass('wasActive');
  });
});