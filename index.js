var player, controller, context, loop;
 
context = document.querySelector('#canvasone').getContext('2d')
context.canvas.width = 200;
context.canvas.height = 300;

player = {
  x: 100,
  y: 100,
  x_velocity: 0,
  y_velocity: 0,
  jumping:false,
  height:10,
  width: 10
  };
controller = {
  down:false,
  up:false,
  left:false,
  right:false,
  space:false,
  keyListener:function(event) {
    
    var yeet=(event.type == "keydown")?true:false;
    
    switch(event.keycode) {
      
      case 87:
        controller.up = yeet;
      break;
      case 83:
        controller.down = yeet;
      break;
      case 65:
        controller.left = yeet;
      break;
      case 68:
        controller.down = yeet;
      break;
      case 32:
        controller.space = yeet;
      break;
     }
 }
};
        loop = function() {
          if(controller.left){
            player.x_velocity -= 9;
          }
          if(controller.up && player.jumping) {
            player.y_velocity -= 9;
            player.jumping=true;
          }
          if(controller.down) {
            player.y_velocity += 9;
          }
          if(controller.right) {
            player.x_velocity += 9;
          }
          
      player.y_velocity = 1.5;
      player.y += player.y_velocity;  
      player.x += player.x_velocity;
      player.x_velocity *= 0.9;
      player.y_velocity *= 0.9;
    
          
  context.fillStyle = "#b0e0e6"; // this is the sky or something don't know
  context.fillRect(0, 0, 200, 300);
  context.fillStyle = "#ff0000";
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fill();
  context.fillstyle = "#afafaf";
  context.beginpath();
  var ob = context.rect(100,100,100,100);
  context.fill();
  if (player.x < ob.x + player.width && player.x + player.width > ob.x && player.y < ob.y + ob.height && player.y + player.height > ob.y) { 
   return false;
  }
   return true; 

      
      window.requestAnimationFrame(loop);

    };

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
