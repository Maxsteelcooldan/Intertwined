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

var context, controller, loop;
var world = new game('600', '600')
var player=new game.critter(0,500,50,50,0,'<img src="Block.png" style="width:100%">','player');
context = document.querySelector("canvas").getContext("2d");

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

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 65:// left key
        controller.left = key_state;
      break;
      case 87:// up key
        controller.up = key_state;
      break;
      case 68:// right key
        controller.right = key_state;
      break;

    }

  }

};

loop = function() {

  if (controller.up && rectangle.jumping == false) {

    player.y_velocity -= 20;
    player.jumping = true;

  }

  if (controller.left) {

    player.x_velocity -= 0.5;

  }

  if (controller.right) {

    player.x_velocity += 0.5;

  }

  player.y_velocity += 1.5;// gravity
  player.x += player.x_velocity;
  player.y += player.y_velocity;
  player.x_velocity *= 0.9;// friction
  player.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (player.y > 180 - 16 - 32) {

    player.jumping = false;
    player.y = 180 - 16 - 32;
    player.y_velocity = 0;

  }

  // if rectangle is going off the left of the screen
  if (player.x < -32) {

    player.x = 320;

  } else if (player.x > 320) {// if rectangle goes past right boundary

    player.x = -32;

  }

  context.fillStyle = "#202020";
  context.fillRect(0, 0, 320, 180);// x, y, width, height
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 164);
  context.lineTo(320, 164);
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
