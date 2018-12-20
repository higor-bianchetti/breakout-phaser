import 'phaser';
import {MainMenu} from './scenes/main_menu';
import {Breakout} from './scenes/game';

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'game-content',
    scene: [MainMenu, Breakout],
    physics: {
        default: 'arcade'
    }
};

new Phaser.Game(config);