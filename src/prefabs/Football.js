class Football extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        this.setCollideWorldBounds(true);
        
        footballDirection = 'vertical'
    }
    update(cursors, scene) {
        
        let footballVector = new Phaser.Math.Vector2(0 , 0);

        if(cursors.left.isDown || scene.input.keyboard.addKey('A').isDown) {
            footballVector.x = -1;
            footballDirection = 'horizontal';
        } else if(cursors.right.isDown || scene.input.keyboard.addKey('D').isDown) {
            footballVector.x = 1;
            footballDirection = 'horizontal';
        }

        if (cursors.up.isDown || scene.input.keyboard.addKey('W').isDown) {
            footballVector.y = -1;
            footballDirection = 'vertical';
        } else if (cursors.down.isDown || scene.input.keyboard.addKey('S').isDown) {
            footballVector.y = 1;
            footballDirection = 'vertical';
        }

        footballVector.normalize();
        this.setVelocity(footballVector.x * 250, footballVector.y * 250)
        this.play(footballDirection, true);

    }
}