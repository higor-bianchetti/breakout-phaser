import {MenuButton} from '../objects/menu_button';

export class MainMenu extends Phaser.Scene {

    preload() {
        // TODO:
        // Carregar uma imagem de fundo
    }

    create() {
        // Código temporário responsável por exibir um simples título na tela inicial
        this.titleText = this.add.text(175, 125, 'Breakout Phaser', {
            fontSize: '50px',
            fill: '#00F'
        });

        // Botão de Iniciar Jogo
        this.playBtn = new MenuButton(this, 375, 400, 'Jogar', {
            fontSize: '25px',
            fill: '#0F0'
        }, () => this.teste());
        this.add.existing(this.playBtn);
    }

    teste() {
        console.log("CLICK BTN");
    }
}