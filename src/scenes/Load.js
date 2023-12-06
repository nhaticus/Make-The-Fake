class Load extends Phaser.Scene{
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        //font
        this.load.bitmapFont('toonyFont', '/font/ToonyFont.png', '/font/ToonyFont.fnt')

        //images
        this.load.image('menu', '/img/Menu.png')
        this.load.image('field', '/img/field.png')

        //sounds
        
        //spritsheets
        this.load.spritesheet('player', './spritesheets/player.png', {
            frameWidth: 64,
            frameHeight: 64
        });   
    }

    create() {
        //anims

        //down
        this.anims.create({
            key: 'run-down',
            frameRate: 3,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [3, 5] 
            })
        });

        this.anims.create({
            key: 'idle-down',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 4
            })
        });

        //up
        this.anims.create({
            key: 'run-up',
            frameRate: 3,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [3, 5] 
            })
        });

        this.anims.create({
            key: 'idle-up',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 4
            })
        });

        //left
        this.anims.create({
            key: 'run-left',
            frameRate: 3,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [3, 5] 
            })
        });

        this.anims.create({
            key: 'idle-left',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 4
            })
        });

        //right
        this.anims.create({
            key: 'run-right',
            frameRate: 3,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [3, 5] 
            })
        });

        this.anims.create({
            key: 'idle-right',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 4
            })
        });

        //music

        
        this.scene.start('menuScene')
    }
}