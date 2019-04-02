$("#play").click(()=>{
  $("#home").hide();
  $("#game").show();
});

$("#arrow").click(()=>{
  $("#game").hide();
  $("#start").show();
});

$("#one").click(()=>{
  $("#start").hide();
  $("#levelone").show();
});

$("#backone").click(()=>{
  $("#levelone").hide();
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

var main = document.querySelector('#main')
$(document).keydown((e)=>{
  var position = $("#main").position();
  key=e.key.toLowerCase();
  if(key=='w'){
    $("#main").css('top', position.top - 20 + 'px');
  }
      if(key=='a'){
    $("#main").css('left', position.left - 20 + 'px');
  }
   if(key=='d'){
    $("#main").css('right', position.right - 20 - 'px');
  }
  if(key=='s'){
    $("#main").css('right', position.right - 20 - 'px');
  }
});
