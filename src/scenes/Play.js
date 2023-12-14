class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        this.text = this.add.text(0, height ,'ARROW KEYS or WASD to move\nR to restart\nM for menu',{
            fontSize: 16,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(0, 0);
        this.text.setScrollFactor(0)

        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            over = false;
            this.scene.start('menuScene');
        });

        //restart game option
        this.input.keyboard.on('keydown-R', () => {
            over = false;
            this.scene.restart();
        }); 

        //create map that gievs the general dimension of the game
        this.map = this.add.image(0, 0, 'field').setOrigin(0, 0);

        //prettier bg color
        this.cameras.main.setBackgroundColor(0xFACADE);
       
        //record arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();

        //stadium bg
        this.stadium = this.physics.add.sprite(0, 0, 'stadium').setOrigin(0)
        this.stadium.setImmovable(true)
        
        //enemy
        this.enemySpawned = false;

        //player
        this.player = new Player(this, 0, height, 'player', 4).setOrigin(0.5)
        this.physics.add.collider(this.player, this.stadium)
      
        //smaller hitbox to create a 3d feel
        this.player.setBodySize(this.player.width / 2, this.player.height / 3)
        this.player.body.setOffset(this.player.height / 4, 2 * this.player.height / 3)

        //camera moves with the player
        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)
    }

    createEnemy() {
        let enemyX = Phaser.Math.Between(this.map.height - this.stadium.height, this.map.height);
        this.enemy = new Enemy(this, width, enemyX, 'enemy', 4).setOrigin(0)
        this.enemy.setBodySize(this.enemy.width / 2, this.enemy.height / 3)
        this.enemy.body.setOffset(this.enemy.height / 4, 2 * this.enemy.height / 3)

        //if enemy hit worldbound destroy
        this.enemy.on('worldbounds', () => {
            // if (!this.enemy.getBounds().intersects(this.physics.world.bounds)) {
                // Destroy the enemy if it's not within the world bounds
                // this.enemy.child.destroy();
                this.enemy.destroy()
                console.log('destroyed')
            // }
        });

        this.physics.add.collider(this.player, this.enemy, () => {
            this.hitEnemy(this.player, this.enemy);
        })
    }

    hitEnemy(player, enemy) {
        // this.enemy.destroy()

        //pause the scene and send it to the back
        //bring a different game scene up
            //in game scene have a timer in which the player will have to dodge incoming objects, if successful set winMinigame to true and return to this scene
        console.log('they collided')
    }

    update() {
        //cool animated bg
        this.stadium.play('anim-bg', true)

        //update game objects
        this.player.update(this.cursors, this)

        if (!this.enemySpawned){
            this.createEnemy()
            this.enemySpawned = true;
        }
    }
}