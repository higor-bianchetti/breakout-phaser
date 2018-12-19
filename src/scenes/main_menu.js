export class MainMenu extends Phaser.Scene {

    preload() {
        this.load.image('title', 'assets/img/title.png');
        this.load.spritesheet('btn_play', 'assets/img/btn_play.png', {
            frameWidth: 150, frameHeight: 30
        });
    }

    create() {
        // Exibe o título na tela inicial
        this.add.image(400, 152, 'title');

        // Altera a imagem do botão com eventos do mouse
        const btnPlay = this.add.image(400, 415, 'btn_play');
        btnPlay.setInteractive();

        btnPlay.on('pointerover', () => { btnPlay.setFrame(1); });
        btnPlay.on('pointerout', () => { btnPlay.setFrame(0); });
    }
}