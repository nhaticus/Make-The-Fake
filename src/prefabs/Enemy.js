class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        //smaller hitbox to create a 3d feel
        this.setBodySize(this.width / 2, this.height / 3)
        this.setOffset(this.height / 4, 2 * this.height / 3)

        this.setImmovable(true)
        this.setVelocityX(-250)
        this.play('enemy-left', true)
    }
}