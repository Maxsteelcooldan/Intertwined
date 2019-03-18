$("#play").click(()=>{
  $("#home").hide();
  $("#game").show();
});

$("#arrow").click(()=>{
  $("#game").hide();
  $("#start").show();
});
function Game () {
  this.box = function (text) {
    this.text = text;
    $('#box').text(text);
  }
}

var game = new Game();
var box = new game.box('In a world where mankind has been turned into non-living objects.The only person who can save the world is the Block');
