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
var game = new world();
$('#levels').append(game.el);
game.el.style.background = "#42f4d7";
var ground =new game.rect(0,600,500,50,0,'green');
var player=new game.critter(0,500,50,50,0,'<img src="Block.png" style="width:100%">','player');
var key={};
var gravity = 0.4;
levels =  [
  function() {
    player.movey(gravity);
  }, function() {
    //leveltwo
  }
];
$("#one").click(()=>{
  $("#start").hide();
  $("#levels").show();
  setInterval(levels[0],16);
});
document.onkeypress=(e)=>key[e.key.toLowerCase()]=e.type=true;
document.onkeyup=(e)=>key[e.key.toLowerCase()]=false;
setInterval(()=>{
  if(key['w']){
         player.movey(-2);
  }if(key['a']){
         player.movex(-2);
  }if(key['s']){
         player.movey(2);
  }if(key['d']){
         player.movex(2);
  }
}, 15);

$('#canvasone').show();
//organize your elements into an object so you dont run jquery over and over again
/*like this: game.elements = {
  a: $('#a'),
  b: $('#b'),
  c: $('#c')
}*/
