
$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#index');
  var offset = startchange.offset();
  var startchange2 = $('#steam');
  var offset2 = startchange2.offset();
  var startchange3 = $('#productos2');
  var offset3 = startchange3.offset();
  var startchange4 = $('#quienes_somos2');
  var offset4 = startchange4.offset();

  if(startchange.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();
        //console.log(offset.top + scroll_start);
        //console.log(offset.top);
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
      if(offset2.top == (offset2.top + scroll_start)){
        $('.navbar-custom').css('background-color', 'rgba(255, 25, 255, 0)');
      }else{
        $('.navbar-custom').css('background-color', 'rgb(15, 118, 153)');
      }
    })
  }
  
  if(startchange3.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();

      if(offset3.top == (offset3.top + scroll_start)){
        $('.navbar-custom').css('background-color', 'rgba(255, 255, 255, 0)');
      }else{
        $('.navbar-custom').css('background-color', '#1B1464');
      }
    })
  }
  
  if(startchange4.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();

      if(offset4.top == (offset4.top + scroll_start)){
        $('.navbar-custom').css('background-color', 'rgba(255, 255, 255, 0)');
      }else{
        $('.navbar-custom').css('background-color', '#B53471');
      }
    })
  }
})
