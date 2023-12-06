class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    create() {
        this.cameras.main.setBackgroundColor(0xFACADE);
        this.add.image(0, 0, 'menu').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Arial', 
            fontSize: '24px',
            color: '#000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(0, height ,'Press M to go back', menuConfig).setOrigin(0, 0);
        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            this.scene.start('menuScene');
        });
        this.add.bitmapText(width / 2, height / 2 , 'toonyFont', 'Scoring A Touchdown\n\
by Nhat Thai\n\
Assets: Nhat Thai\n\
Sounds: \n\
Font: Toony Lines by Mans Greback AB ', 64).setOrigin(0.5).setCenterAlign();

    }
}