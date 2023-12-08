class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
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

        this.cameras.main.setBackgroundColor(0xFACADE);
       
        this.cursors = this.input.keyboard.createCursorKeys();

        this.map = this.add.image(0, 0, 'field').setOrigin(0, 0);


        this.stadium = this.physics.add.sprite(0, 0, 'stadium').setOrigin(0)
        this.stadium.setImmovable(true)
        
        //enemy
        this.enemy = new Enemy(this, width, height - borderSize, 'enemy', 4).setOrigin(0.5)

        this.enemy.setBodySize(this.enemy.width / 2, this.enemy.height / 3)
        this.enemy.body.setOffset(this.enemy.height / 4, 2 * this.enemy.height / 3)

        //player
        this.player = new Player(this, 0, height, 'player', 4).setOrigin(0.5)
      
        //smaller hitbox
        this.player.setBodySize(this.player.width / 2, this.player.height / 3)
        this.player.body.setOffset(this.player.height / 4, 2 * this.player.height / 3)

        this.physics.add.collider(this.player, this.stadium)

        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

    }

    update() {
        this.stadium.play('anim-bg', true)

        this.enemy.update()
        this.player.update(this.cursors, this);
        
    }

}