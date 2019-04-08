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
  x:144,
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

loop = function() {
  if (controller.up && player.jumping == false) {
    player.y_velocity -= 15;
    player.jumping = true;
  }
  if(controller.left) {
    player.x_velocity -= 15;
  }
  if(controller.right) {
    player.x_velocity += 15;
  }
  if(controller.down) {
    player.x_velocity += 15;
  }
  player.y_velocity += 1.5;
  player.x += player.x_velocity;
  player.y += player.y_velocity;
  player.x_velocity *= 0.9;
  player.y_velocity *= 0.9;
  
  context.rect(115,120,100,50,'green')

  window.requestAnimationFrame(loop);
};



window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
