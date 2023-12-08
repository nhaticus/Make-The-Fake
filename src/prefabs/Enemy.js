class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        // this.setCollideWorldBounds(true);

        this.setImmovable(true)
        this.setVelocityX(-250)
        this.play('enemy-left', true)
        this.setout
    }
}