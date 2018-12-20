export class MainMenu extends Phaser.Scene {

    constructor() {
        super({ key: "MainMenu" });
    }

    preload() {
        this.load.image('title', 'assets/img/title.png');
        this.load.spritesheet('btn_play', 'assets/img/btn_play.png', {
            frameWidth: 150, frameHeight: 30
        });
    }

    create() {
        // Exibe o título na tela inicial
        this.add.image(400, 152, 'title');

        const btnPlay = this.add.image(400, 415, 'btn_play');
        btnPlay.setInteractive();
        
        // Altera a imagem do botão com eventos do mouse
        btnPlay.on('pointerover', () => { btnPlay.setFrame(1); });
        btnPlay.on('pointerout', () => { btnPlay.setFrame(0); });
        btnPlay.on('pointerup', () => { this.startGame(); });
    }

    startGame() {
        this.scene.start('Breakout');
    }
}