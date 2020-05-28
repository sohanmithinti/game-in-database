class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("game had started",120,100);
    Player.getplayerinfo();
       console.log(allPlayers);
    if(allPlayers != undefined){
      var displaypos = 130;
      for(var plr in allPlayers){
        if(plr == "player"+player.index){
          fill("red")
        }
        else{
          fill("blue")
        }
        displaypos = displaypos + 20;
        textSize(20);
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displaypos);
      }
    }
    if(keyDown(UP_ARROW)){
      player.distance = player.distance + 50;
      player.update();
    }
  }
}
