class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    };

    create() {
        this.cameras.main.setBackgroundColor(0xFACADE)
        this.add.image(0, 0, 'Menu').setOrigin(0)

        let menuConfig = {
            fontFamily: 'Arial', 
            fontSize: '32px',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // title
        this.add.bitmapText(width / 2, height / 2 - padding, 'toonyFont', 'Scoring A Touchdown', 96).setOrigin(0.5);

        this.add.text(width / 2, padding,'HIGH SCORE:' + highScore, menuConfig).setOrigin(0.5,0);
      
        //menu
        let playOption = this.add.bitmapText(width / 3, height / 2 + padding, 'toonyFont', 'Play', 64).setOrigin(0.5);
        let creditsOption = this.add.bitmapText(2 * width / 3, height / 2 + padding, 'toonyFont', 'Credits', 64).setOrigin(0.5);

        let selectedOption = 0;
        let menuOptions = [playOption, creditsOption];
      
        // highlighting feature
        menuOptions[selectedOption].setTintFill(0xffff00)
      
        this.input.keyboard.on('keydown-LEFT', () => {
            menuOptions[selectedOption].clearTint()
            selectedOption = 0
            menuOptions[selectedOption].setTintFill(0xffff00)
        });
      
        this.input.keyboard.on('keydown-RIGHT', () => {
            menuOptions[selectedOption].clearTint()
            selectedOption = 1
            menuOptions[selectedOption].setTintFill(0xffff00)
        });
      
        this.input.keyboard.on('keydown-SPACE', () => {
            if (selectedOption === 0) {
                game.settings = {
                }
                this.scene.start('playScene');
            } else if (selectedOption === 1) {
                this.scene.start('creditScene');
            }
        });
    }
}
