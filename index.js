$("#play").click(()=>{
  $("#home").hide();
  $("#game").show();
});

function Game () {
  this.Box = function (text) {
    this.text = text;
    $('#box').text(text);
  }
}

var game = new Game();

var box = new game.Box('yeet it is a box');
