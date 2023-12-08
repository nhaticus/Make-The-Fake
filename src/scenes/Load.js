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
        this.load.spritesheet('stadium', '/img/stadium.png', {
            frameWidth: 2160,
            frameHeight: 300
        })

        //sounds
        
        //spritsheets
        this.load.spritesheet('player', './spritesheets/player.png', {
            frameWidth: 64,
            frameHeight: 64
        });   

        this.load.spritesheet('enemy', './spritesheets/enemy.png', {
            frameWidth: 64,
            frameHeight: 64
        });  
    }

    create() {
        //anims

        //cool bg
        this.anims.create({
            key: 'anim-bg',
            frameRate: 1,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('stadium', { 
                frames: [0, 1] 
            })
        });

        //down
        this.anims.create({
            key: 'run-down',
            frameRate: 3,
            repeat: -1,
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
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [0, 2] 
            })
        });

        this.anims.create({
            key: 'idle-up',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 1,
                end: 1
            })
        });

        //right
        this.anims.create({
            key: 'run-right',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [6, 8] 
            })
        });

        this.anims.create({
            key: 'idle-right',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 7,
                end: 7
            })
        });

        //left
        this.anims.create({
            key: 'run-left',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', { 
                frames: [9, 11] 
            })
        });

        this.anims.create({
            key: 'idle-left',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 10,
                end: 10
            })
        });

        //enemy
        this.anims.create({
            key: 'enemy-left',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('enemy', { 
                frames: [9, 11] 
            })
        });


        //music

        
        this.scene.start('menuScene')
    }
}