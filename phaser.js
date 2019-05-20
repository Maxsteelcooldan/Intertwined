var hero = {};
var config = {
  type: Phaser.AUTO,
  width: 850,
  height: 600,
  backgroundColor: "b9eaff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
}
var game = new Phaser.Game(config)

function preload() {
  //this.load.image('blockimage', 'Block.png')
  this.load.image('items','TheReal_1.png')
  this.load.tilemapTiledJSON('map','Map.json')
}
function create() {
  var map = this.add.tilemap('map')
  var tiles = map.addTilesetImage('tiles','items')
  var toplayer = map.createStaticLayer("top", [tiles], 0, 0)
  var bottomlayer = map.createStaticLayer("bottom", [tiles], 0, 0)
  hero.main = this.physics.add.sprite(200,200, 'blockimage')
  hero.cursors = this.input.keyboard.createCursorKeys();
  hero.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  hero.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  hero.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.physics.add.collider(hero.main, bottomlayer)
  bottomlayer.setCollisionByProperty({collides:true})
  this.cameras.main.setBounds(10, 10, 10, 10);
  this.cameras.main.startFollow(hero.main);
}
function update() {
  if(hero.cursors.right.isDown || hero.keyD.isDown) {
    hero.main.x += 5
  } else if (hero.cursors.left.isDown || hero.keyA.isDown) {
    hero.main.x -= 5
  } else if (hero.cursors.up.isDown || hero.keyW.isDown) {
    hero.main.y -= 5
  } if(hero.keyW.isDown && hero.keyA.isDown || hero.cursors.up.isDown && hero.cursors.left.isDown) {
    hero.main.y -= 5;
    hero.main.x -= 5;
  } if(hero.keyW.isDown && hero.keyD.isDown || hero.cursors.up.isDown && hero.cursors.right.isDown) {
    hero.main.y -= 5;
    hero.main.x += 5;
  }
}
