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
  this.load.image('block', 'assets/block.png' )
}
function create() {
  hero.main = this.add.sprite(100,400, 'block')
}
function update() {

}

