var Breakout = new Phaser.Class({
    Extends: Phaser.Scene,
});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'game-content',
    scene: [Breakout],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);