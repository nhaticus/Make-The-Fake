class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        this.cameras.main.setBackgroundColor(0xFACADE);
       
        this.cursors = this.input.keyboard.createCursorKeys();

        this.map = this.add.image(0, 0, 'field').setOrigin(0, 0);


        this.add.text(0, height ,'R to restart\nM for menu',{
            fontSize: 16,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(0, 0);
        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            this.scene.start('menuScene');
        });

        //restart game option
        this.input.keyboard.on('keydown-R', () => {
            this.scene.restart();
        });


        let menuConfig = {
            fontFamily: 'Arial', 
            fontSize: '32px',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.player = new Player(this, width/2, height /2, 'player', 4).setOrigin(0.5, 1);
        // this.add.physics
        //smaller hitbox
        this.player.setBodySize(this.player.width / 2);

        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        if(this.player.x == width * 2) {
            over = true;
            this.add.bitmapText(width / 2, height / 2 - padding, 'toonyFont', 'TOUCH DOWN!', 96).setOrigin(0.5);

        }
    }

    update() {
        this.player.update(this.cursors);
        
    }

}