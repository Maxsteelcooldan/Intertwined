const hero = {}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 450,
  backgroundColor: 0x333333,
  scene: {
    create,
    preload,
    update
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('block', 'Block.png' )
}
function create() {
  hero.main = this.add.sprite(100,400, 'block')
  hero.cursors = this.input.keyboard.createCursorKeys();
}
function update() {
  if(hero.cursors.right.isDown ) {
    hero.main.x += 5
  } else if (hero.cursors.left.isDown) {
    hero.main.x -= 5
  } else if (hero.cursors.up.isDown) {
    hero.main.y -= 5
  }
}
