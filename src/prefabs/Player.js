class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        this.setCollideWorldBounds(true);

        //smaller hitbox to create a 3d feel
        this.setBodySize(this.width / 2, this.height / 3)
        this.setOffset(this.height / 4, 2 * this.height / 3)

        this.score = 0;

        playerDirection = 'down'
        
    }
    

    update(cursors, scene) {
        
        let playerVector = new Phaser.Math.Vector2(0 , 0);

        if(cursors.left.isDown || scene.input.keyboard.addKey('A').isDown) {
            playerVector.x = -1;
            playerDirection = 'left';
        } else if(cursors.right.isDown || scene.input.keyboard.addKey('D').isDown) {
            playerVector.x = 1;
            playerDirection = 'right';
        }

        if (cursors.up.isDown || scene.input.keyboard.addKey('W').isDown) {
            playerVector.y = -1;
            playerDirection = 'up';
        } else if (cursors.down.isDown || scene.input.keyboard.addKey('S').isDown) {
            playerVector.y = 1;
            playerDirection = 'down';
        }

        

        playerVector.normalize();
        let playerMovement;

        if (!over){
            this.setVelocity(playerVector.x * 250, playerVector.y * 100)
            playerVector.length() ? playerMovement = 'run' : playerMovement = 'idle';
            this.play(playerMovement + '-' + playerDirection, true);
        }

        //touchdown
        if(this.x > 2000 && !over) {
            over = true;
            scene.sound.play('touchDown',{
                loop: false,
                volume: 0.1
            })
        }
    }
}