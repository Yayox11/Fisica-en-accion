
$(document).ready(
  function(){
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
}
)
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}