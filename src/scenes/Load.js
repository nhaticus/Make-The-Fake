class Load extends Phaser.Scene{
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        //font
        this.load.font('toonyFont', 'font/ToonyLine.otf')
        

        //images


        //sounds
        
        //spritsheets
        this.load.spritesheet('player', 'spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        //music

        
        this.scene.start('menuScene')
    }
}