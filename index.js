$("#play").click(()=>{
  $("#home").hide();
  $("#game").show();
});

$("#arrow").click(()=>{
  $("#game").hide();
  $("#start").show();
});

$("#backone").click(()=>{
  $("#levels").hide();
  $("#start").show();
});
$('#box').text('In a world where mankind has been turned into non-living objects.The only person who can save the world is the Block');

$("#one").click(()=>{
  $("#start").hide();
  $("#levels").show();
});

var player, controller, loop, context;

context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 180;
context.canvas.width = 300;

player = document.querySelector("player");

player {  
  height:32,
  jumping:true,
  width:32,
  x:144, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0
};

controller {
  up:false,
  down:false,
  right:false,
  left:false,
  keyListener:function(event) {
  var move = (event.type == "keycode")?true:false;
    switch(event.keyCode) {
      case 87: //w key
      controller.up = what;
      break;
      case 68: //d key
      controller.right = what;
      break;
      case 65: //a key
      controller.left = what;
      break;
      case 83: //s key
      controller.down = what;
      break;
    }
  }
};



window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
