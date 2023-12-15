let width = 854;
let height = 480;
let borderSize = width / 8;
let padding = borderSize / 2;

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: width,
    height: height + 100,
    physics: {
        default: 'arcade',
        arcade: {
            width: width ,
            height: height,
            debug: true
        }
    },
    scene: [ Load, Menu, Credit, Play, Minigame]
}

let highScore = 0;
let timer = 0
let over = false;
let winMinigame = false;
let playerDirection, footballDirection;

let game = new Phaser.Game(config);