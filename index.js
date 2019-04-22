$("#play").click(() => {
  $("#home").hide();
  $("#game").show();
});

$("#arrow").click(() => {
  $("#game").hide();
  $("#start").show();
});

$("#backone").click(() => {
  $("#levels").hide();
  $("#start").show();
});
$('#box').text('In a world where mankind has been turned into non-living objects.The only person who can save the world is the Block');

$("#one").click(() => {
  $("#start").hide();
  $("#levels").show();
});

context = document.querySelector("#canvasone").getContext("2d");

context.canvas.height = window.innerHeight;
context.canvas.width = window.innerWidth;

var rectangle = new Player(300, 300, 18, 0); // making the player.
var ob = rect(300, 700, 30, 30);

function Player(width, height, x, y) { // function for making a Player.
  var that = this;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.jumping = false;
  this.x_velocity = 0;
  this.y_velocity = 0;
}
function rect(x, y, w, h,color) {
 context.beginPath();
 context.rect(x,y,w,h);
 context.fillStyle = color;
 context.fill();
 context.closepath();
}
var ob = rect(300, 700, 30, 30);

function World(controller, width, height, gravity, friction, floor_height, player) {
  var that = this;
  this.width = width;
  this.height = height;
  this.gravity = gravity;
  this.friction = friction;
  this.floorHeight = floor_height;
  this.controller = controller;
  this.player = player;
  this.animationLoop = function () {
    if (that.controller.up && that.player.jumping == false) {
      that.player.y_velocity -= 80;
      that.player.jumping = true;
    }
    if (that.controller.left) {
      that.player.x_velocity -= 0.5;
    }
    if (that.controller.right) {
      that.player.x_velocity += 0.5;
    }
    that.player.y_velocity = that.player.y_velocity + that.gravity;
    that.player.x_velocity *= that.friction;// friction
    that.player.y_velocity *= that.friction;// friction
    that.player.x += that.player.x_velocity;
    that.player.y += that.player.y_velocity;
    // if that.player is falling below floor line
    if (that.player.y > that.height - that.floorHeight - that.player.height / 2 + 16) {
      that.player.jumping = false;
      that.player.y = that.height - that.floorHeight - that.player.height / 2 + 16;
      that.player.y_velocity = 0;
    }
    // TO MAKE SURE THE CHARACTER WONT LEAVE
    if (that.player.x < -40) {
      that.player.x = -40;
    } else if (that.player.x > width + 32) {// if that.player goes past right boundary
      that.player.x = -32;
    }
    image = new Image();
    image.src = "Block.png";
    context.fillStyle = "#2196F3";
    context.fillRect(0, 0, that.width, that.height);//clear rect with blue
    context.beginPath(); //start drawing
    context.fillStyle = "#4caf50";
    context.rect(0, that.height - that.floorHeight, that.width, that.floorHeight, 'grey');
    context.drawImage(image, that.player.x, that.player.y, that.player.width, that.player.height);
    context.fill();
    GODSPLAN = function() {
if (player.x < ob.x + player.width && player.x + player.width > ob.x && player.y < ob.y + ob.height && player.y + player.height > ob.y) { 
return false;
}
return true; 
    };

    window.requestAnimationFrame(that.animationLoop); // when it is able to loop again
  };

  this.start = function () {
    document.onkeypress = that.controller.keyListener;
    document.onkeyup = that.controller.keyListener;
    window.requestAnimationFrame(that.animationLoop);
  };
}

function Controller() {
  var that = this;
  this.left = false;
  this.right = false;
  this.up = false;
  this.down = false;
  this.keyListener = function (event) {
    var hit = (event.type === 'keypress') ? true : false;
    var key = event.key.toLowerCase();
    if (key === 'w')
      that.up = hit;
    else if (key === 'a')
      that.left = hit;
    else if (key === 's')
      that.down = hit;
    else if (key === 'd')
      that.right = hit;
  }
};

var world = new World(new Controller(), window.innerWidth, window.innerHeight, 1.8, 0.9, 164, rectangle);

world.start();
