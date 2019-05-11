const hero = {}
var keyA, keyW, keyD

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
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


const game = new Phaser.Game(config)

function preload() {
  this.load.image('block', 'assets/block.png' )
  this.load.image('ground', 'assets/block.png')
}
function create() {
  hero.main = this.physics.add.sprite(100,400, 'block')
  hero.cursors = this.input.keyboard.createCursorKeys();
  hero.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  hero.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  hero.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  hero.main.setCollideWorldBounds(true)
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
}
function update() {
  if(hero.cursors.right.isDown || hero.keyD.isDown ) {
    hero.main.x += 5
  } else if (hero.cursors.left.isDown || hero.keyA.isDown) {
    hero.main.x -= 5
  } else if (hero.cursors.up.isDown || hero.keyW.isDown) {
    hero.main.y -= 5
  } 
}
