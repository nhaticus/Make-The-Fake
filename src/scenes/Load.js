class Load extends Phaser.Scene{
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        //font
        this.load.bitmapFont('toonyFont', '/font/ToonyFont.png', '/font/ToonyFont.fnt')

        //images
        this.load.image('Menu', '/img/Menu.png')

        //sounds
        
        //spritsheets
        this.load.spritesheet('player', './spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });   
    }

    create() {
        //music

        
        this.scene.start('menuScene')
    }
}