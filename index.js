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

$("#back").click(()=>{
  $("#game").hide();
  $("#start").show();
});
$('#box').text('In a world where mankind has been turned into non-living objects.The only person who can save the world is the Block');
var game = new world();
$('#game').append(game.el);
var player=new game.critter(0,0,50,50,0,'<img src="Block.png">','player');
document.onkeypress=(e)=>key[e.key.toLowerCase()]=e.type=true;
document.onkeyup=(e)=>key[e.key.toLowerCase()]=false;
setInterval(()=>{
  if(key['w']){
     
  }if(key['a']){
    
  }if(key['s']){
    
  }if(key['d']){
    
  }
}, 15);

