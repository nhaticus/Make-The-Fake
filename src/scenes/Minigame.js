class Minigame extends Phaser.Scene {
    constructor() {
        super('minigameScene');
    };

    create() {
        this.out = false
        this.cameras.main.fadeIn(2000)

        this.add.bitmapText(width / 2, height, 'toonyFont', 'time is still ticking!', 96).setOrigin(0.5);

        //map
        this.rectangle = this.add.rectangle(width / 2, height / 2, width / 2, width / 2, 0xFFFFFF).setOrigin(0.5)
        this.cameras.main.setBounds(0, 0, this.rectangle.width, this.rectangle.height)
        this.physics.world.setBounds(width / 4, height / 2 - width / 4, this.rectangle.width, this.rectangle.height)

        //touch zone
        let randomX = Phaser.Math.Between(width / 4 + 24, 3 * width / 4 - 24)
        let randomY = Phaser.Math.Between(height / 2 - width / 4 + 24, height / 2 + width / 4 - 24)
        this.zone = this.add.sprite(randomX, randomY, 'goal').setOrigin(0.5).setScale(1.5)
        this.physics.world.enable(this.zone)
        this.zone.body.setSize(this.zone.width / 2,this.zone.height / 2);

        //player
        this.football = new Football(this, width / 2, height / 2, 'football', 0).setOrigin(0.5)

        this.physics.add.overlap(this.football, this.zone, () => {
            this.scene.resume('playScene').stop()
        })

        let additionalTime = 0;
        let timerText = this.add.text(width / 2 , padding ,'+Time:' + additionalTime + 's',{
            fontSize: 32,
            fontFamily: 'Arial',
            color: '#000'
        }).setOrigin(0.5);

        //clock still ticking
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function() {
                additionalTime++
                timer++
                timerText.text = '+Time:' + additionalTime + 's'
            }
        })
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
        this.football.update(this.cursors, this)
    }
}
