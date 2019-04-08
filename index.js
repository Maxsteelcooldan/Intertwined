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

var context, controller, player, loop;

context = document.querySelector("canvas").getContext("2d");
player = document.querySelector("player");

context.canvas.height = 180;
context.canvas.width = 320;

player = {
  height:32,
  jumping:true,
  width:32,
  x:144, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0
};

controller = {
  right:false,
  left:false,
  up:false,
  down:false,
  keyListener:function(event) {

    var move = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 87:// w key
        controller.up = move;
      break;
      case 65:// a key
        controller.left = move;
      break;
      case 68:// d key
        controller.right = move;
      break;
      case 83:// s key
        controller.down = move;
      break;

    }

  }

};

loop = function() {

  if (controller.up && player.jumping == false) {
    rectangle.y_velocity -= 20;
    rectangle.jumping = true;
  }
  if (controller.left) {
    player.x_velocity -= 0.5;
  }

  if (controller.right) {
    player.x_velocity += 0.5;
  }
  
  if (controller.down) {
    player.x_velocity += 20;
  }
  player.y_velocity += 1.5;
  player.x += player.x_velocity;
  player.y += player.y_velocity;
  player.x_velocity *= 0.9;
  player_velocity *= 0.9;

  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
