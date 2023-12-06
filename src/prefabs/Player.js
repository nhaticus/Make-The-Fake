class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        this.setCollideWorldBounds(true);

        this.score = 0;

        playerDirection = 'down'
        
    }
    

    update(cursors) {
        
        let playerVector = new Phaser.Math.Vector2(0 , 0);

        if(cursors.left.isDown) {
            playerVector.x = -1;
            playerDirection = 'left';
        } else if(cursors.right.isDown) {
            playerVector.x = 1;
            playerDirection = 'right';
        }

        if (cursors.up.isDown) {
            playerVector.y = -1;
            playerDirection = 'up';
        } else if (cursors.down.isDown) {
            playerVector.y = 1;
            playerDirection = 'down';
        }

        

        playerVector.normalize();

        this.setVelocity(playerVector.x * 500, playerVector.y * 500)
        
        let playerMovement;
        playerVector.length() ? playerMovement = 'run' : playerMovement = 'idle';
        this.play(playerMovement + '-' + playerDirection, true);
    }
}