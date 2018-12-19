import 'phaser';
import {MainMenu} from './scenes/main_menu';

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'game-content',
    scene: MainMenu,
    physics: {
        default: 'arcade'
    }
};

new Phaser.Game(config);