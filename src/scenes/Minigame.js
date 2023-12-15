class Minigame extends Phaser.Scene {
    constructor() {
        super('minigameScene');
    };

    create() {
        this.cameras.main.fadeIn(2000)

        this.add.bitmapText(width / 2, height, 'toonyFont', 'DODGE!', 96).setOrigin(0.5);

        //map
        this.rectangle = this.add.rectangle(width / 2, height / 2, width / 2, width / 2, 0xFFFFFF).setOrigin(0.5)
        this.cameras.main.setBounds(0, 0, this.rectangle.width, this.rectangle.height)
        this.physics.world.setBounds(width / 4, height / 2 - width / 4, this.rectangle.width, this.rectangle.height)

        //timer
        let additionalTime = 0;
        let timerText = this.add.text(width / 2 , padding ,'Overtime:' + additionalTime + 's',{
            fontSize: 32,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(0.5);
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function() {
                additionalTime++
                timer++
                timerText.text = 'Overtime:' + additionalTime + 's'
            }
        })


        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.resume('playScene').stop()
        })

        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            over = false;
            this.scene.start('menuScene');
        });

        //restart game option
        this.input.keyboard.on('keydown-R', () => {
            over = false;
            this.scene.resume('playScene').stop();
        }); 

        this.cursors = this.input.keyboard.createCursorKeys();
        this.football = new Football(this, width / 2, height / 2, 'football', 0).setOrigin(0.5)
    }

    update() {
        this.football.update(this.cursors, this)
    }
}
