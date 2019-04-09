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

var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rectangle = {

  height:144,
  jumping:true,
  width:144,
  x:144, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0

};

controller = {

  left:false,
  right:false,
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
      case 83: // s key
        controller.down = move;
      break;

    }

  }

};

loop = function() {

  if (controller.up && rectangle.jumping == false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }

  if (controller.left) {

    rectangle.x_velocity -= 0.5;

  }

  if (controller.right) {

    rectangle.x_velocity += 0.5;

  }

  rectangle.y_velocity += 1.5;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 180 - 16 - rectangle.height/2) {

    rectangle.jumping = false;
    rectangle.y = 180 - 16 - rectangle.height/2;
    rectangle.y_velocity = 0;

  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < -32) {

    rectangle.x = -32;

  } else if (rectangle.x > 320) {// if rectangle goes past right boundary

    rectangle.x = -32;

  }
  image = new Image();
  image.src="Block.png";
  context.fillStyle = "#2196F3";
  context.fillRect(0, 0, 320, 180);
  context.beginPath();
  context.fillStyle = "#4caf50";
  context.rect(0,155,320,50,'grey')
  context.drawImage(image,rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();


// call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
