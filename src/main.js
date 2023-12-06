/**
 * Nhat Thai
 * Game: Soccer Drill
 * Hours spend: ~15 I lost count
 * Creative tilt: Overall, I think that the game I made is pretty solid. 
 * I had a lot of fun figuring stuff out as well as doing the pixel art even though I'm not much of an artist myself. 
 * I'm particularly am proud of the player animation, it turned out a lot better than I thought though still funny looking
 * As for the game itself, I like that I was able to implement a game speed setting that would speed up sprites and spawnrate as time goes by.
 * The menu is pretty cool too :)
*/ 
let width = 854;
let height = 480;
let borderSize = width / 8;
let padding = borderSize / 2;

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            x: 0,
            y: 0,
            width: width - borderSize * 2,
            height: height,
            debug: false
        }
    },
    width: width,
    height: height,
    scene: [ Load, Menu, Play]
}

let highScore = 0;
let over = false;

let game = new Phaser.Game(config);