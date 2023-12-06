class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    };

    create() {
        this.cameras.main.setBackgroundColor(0x99ffcc);

        let menuConfig = {
            fontFamily: 'toonyFont', 
            fontSize: '48px',
            backgroundColor: '#33cc33',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // title
        this.add.text(borderSize + padding, borderSize, 'Soccer Drill', menuConfig);

        this.add.text(width / 2, 0,'HIGH SCORE:' + highScore, {
            fontSize: '32px',
            backgroundColor: '#33cc33',
            fill: '#ffcc99'
        }).setOrigin(0.5,0);
      
        // menu options
        menuConfig.fontSize = 24;
        this.add.text(width / 2, height - borderSize * 2,'use UP and DOWN arrows to select options, ENTER to select', menuConfig).setOrigin(0.5);
        this.add.text(width / 2, height - borderSize ,'Game controls: ARROW KEYS to move', menuConfig).setOrigin(0.5);
        

        menuConfig.fontSize = 32;

        let playOption = this.add.text(width / 2, borderSize + padding * 2, 'Play', menuConfig).setOrigin(0.5);
        let creditsOption = this.add.text(width / 2, borderSize + padding * 3, 'Credits', menuConfig).setOrigin(0.5);

        let selectedOption = 0;
        let menuOptions = [playOption, creditsOption];
      
        // highlighting feature
        menuOptions[selectedOption].setStyle({ backgroundColor: '#ff0' });
      
        this.input.keyboard.on('keydown-UP', () => {
            menuOptions[selectedOption].setStyle({ backgroundColor: '#33cc33' });
            selectedOption = (selectedOption - 1 + menuOptions.length) % menuOptions.length;
            menuOptions[selectedOption].setStyle({ backgroundColor: '#ff0' });
        });
      
        this.input.keyboard.on('keydown-DOWN', () => {
            menuOptions[selectedOption].setStyle({ backgroundColor: '#33cc33' });
            selectedOption = (selectedOption + 1) % menuOptions.length;
            menuOptions[selectedOption].setStyle({ backgroundColor: '#ff0' });
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
