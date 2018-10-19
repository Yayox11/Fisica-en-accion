
$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#features12-6');
  var offset = startchange.offset();
  var startchange2 = $('#sect2');
  var offset2 = startchange2.offset();

  if(startchange.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();
        console.log(offset.top + scroll_start);
        console.log(offset.top);
      if(offset.top == (offset.top + scroll_start)){
        $('.navbar-custom').css('background-color', '#0e0e0e1f');
      }else{
        $('.navbar-custom').css('background-color', '#000000');
      }
    })
  }
  if(startchange2.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();

      if(offset.top == (offset2.top + scroll_start)){
        $('.navbar-custom').css('background-color', 'rgba(255, 255, 255, 0.83)');
      }else{
        $('.navbar-custom').css('background-color', '#fff');
      }
    })
  }
})
