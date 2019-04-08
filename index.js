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
  down:false,
  keyListener:function(event) {

    var move = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// left key
        controller.left = move;
      break;
      case 38:// up key
        controller.up = move;
      break;
      case 39:// right key
        controller.right = move;
      break;
      case 39:// s key
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
  
  if (controller.down) {
    
    rectangle.x_velocity += 20;
  
  }
  rectangle.y_velocity += 1.5;
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;
  rectangle.y_velocity *= 0.9;

  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
