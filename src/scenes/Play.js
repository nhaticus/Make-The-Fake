class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        //instructions
        this.text = this.add.text(0, height ,'ARROW KEYS or WASD to move\nR to restart\nM for menu',{
            fontSize: 16,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(0, 0);
        this.text.setScrollFactor(0)

        //timer
        let timerText = this.add.text(width , height ,'Time:' + timer + 's',{
            fontSize: 32,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(1, 0);
        timerText.setScrollFactor(0)

        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function() {
                if (!over){
                timer++
            }
                timerText.text = 'Time:' + timer + 's'
            }
        })

        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            //reset all the global vriables
            timer = 0
            over = false;
            this.scene.start('menuScene');
        });

        //restart game option
        this.input.keyboard.on('keydown-R', () => {
            //reset all the global vriables
            timer = 0
            over = false;
            this.scene.restart();
        }); 

        //create map that gievs the general dimension of the game
        this.map = this.add.image(0, 0, 'field').setOrigin(0, 0);

        //prettier bg color
        this.cameras.main.setBackgroundColor(0xFACADE);
       
        //record arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();

        //cool animated stadium bg
        this.stadium = this.physics.add.sprite(0, 0, 'stadium').setOrigin(0)
        this.stadium.setImmovable(true)
        this.stadium.play('anim-bg', true)

        //player
        this.player = new Player(this, 0, height, 'player', 4).setOrigin(0)
        this.physics.add.collider(this.player, this.stadium)

        this.touchDown = this.add.bitmapText(width / 2, height / 2, 'toonyFont', 'TOUCH DOWN!\nR to restart\n M for menu', 72).setOrigin(0.5);
        this.touchDown.setScrollFactor(0)
        this.touchDown.setAlpha(0)

        //camera moves with the player
        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        //enemy
        this.enemy1 = new Enemy(this, 0, 0, 'enemy', 4).setOrigin(0, 1)
        this.enemy2 = new Enemy(this, 0, 0, 'enemy', 4).setOrigin(0, 1)
        this.enemy3 = new Enemy(this, 0, 0, 'enemy', 4).setOrigin(0, 1)

        this.moveEnemy(this.enemy1)
        this.moveEnemy(this.enemy2)
        this.moveEnemy(this.enemy3)

        // this.enemyGroup = this.physics.add.group([this.enemy1, this.enemy2, this.enemy3])
    }

    moveEnemy(enemy) {
        let enemyX = Phaser.Math.Between(this.player.x + width/ 2, this.player.x + width);
        let enemyY = Phaser.Math.Between(this.stadium.height + (this.player.height / 3), this.map.height);
        enemy.setPosition(enemyX , enemyY)

        this.physics.add.collider(this.player, enemy, () => {
            this.hitEnemy(this.player, enemy);
        })
    }

    hitEnemy(player, enemy) {
        this.moveEnemy(enemy)
        this.scene.pause()
        //bring a different game scene up
        if(!this.scene.isActive('minigameScene')) {
            this.scene.run('minigameScene')
        }
    }

    update() {
        //when game is over
        if(over) {
            //destroy everything and popup winning text
            this.enemy1.destroy()
            this.enemy2.destroy()
            this.enemy3.destroy()   
            this.touchDown.setAlpha(1)
            this.player.setFrame(4)

            //new highscore?
            if (highScore == 0){
                highScore = timer
            } else if (highScore > timer) {
                highScore = timer
            }
        }

        //update game objects
        this.player.update(this.cursors, this)
        
        //move enemies when they are outside of player's view
        if (this.enemy1.x < this.player.x - (width / 2 + this.enemy1.width)) { 
            this.moveEnemy(this.enemy1)
        }

        if (this.enemy2.x < this.player.x - (width / 2 + this.enemy2.width)) { 
            this.moveEnemy(this.enemy2)
        }

        if (this.enemy3.x < this.player.x - (width / 2 + this.enemy3.width)) { 
            this.moveEnemy(this.enemy3)
        }
    }
}