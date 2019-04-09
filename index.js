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

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

var rectangle = {

  height: 144,
  jumping: true,
  width: 144,
  x: 144, // center of the canvas
  x_velocity: 0,
  y: 0,
  y_velocity: 0

};

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

      rectangle.y_velocity -= 20;
      rectangle.jumping = true;

    }

    if (that.controller.left) {

      that.player.x_velocity -= 0.5;

    }

    if (that.controller.right) {

      that.player.x_velocity += 0.5;

    }

    that.player.y_velocity += that.gravity;// gravity
    that.player.x += that.player.x_velocity;
    that.player.y += that.player.y_velocity;
    that.player.x_velocity *= that.friction;// friction
    that.player.y_velocity *= that.friction;// friction

    // if that.player is falling below floor line
    if (that.player.y > that.floorHeight - that.player.height / 2) {

      that.player.jumping = false;
      that.player.y = that.floorHeight - that.player.height / 2;
      that.player.y_velocity = 0;

    }

    // if that.player is going off the left of the screen
    if (that.player.x < -32) {

      that.player.x = that.width + 32;

    } else if (that.player.x > width + 32) {// if that.player goes past right boundary

      that.player.x = -32;

    }
    image = new Image();
    image.src = "Block.png";
    context.fillStyle = "#2196F3";
    context.fillRect(0, 0, that.width, that.height); // aneesh, please label your code with comments.
    context.beginPath();
    context.fillStyle = "#4caf50";
    context.rect(0, 155, 320, 50, 'grey')
    context.drawImage(image, that.player.x, that.player.y, that.player.width, that.player.height);
    context.fill();


    // call update when the browser is ready to draw again
    window.requestAnimationFrame(that.animationLoop);

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

var world = new World(new Controller(), 320, 180, 1.5, 0.9, 164, rectangle);

world.start();