export class MenuButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style, callback) {
        super(scene, x, y, text, style);

        this.setInteractive({useHandCursor: true});

        this.on('pointerover', () => this.enterBtnHoverState());
        this.on('pointerout', () => this.enterBtnRestState());
        this.on('pointerdown', () => this.enterBtnActiveState());
        this.on('pointerup', () => {
            this.enterBtnHoverState();
            callback();
        });
    }

    enterBtnHoverState() {
        this.setStyle({fill: '#ff0'});
    }

    enterBtnRestState() {
        this.setStyle({fill: '#0f0'});
    }

    enterBtnActiveState() {
        this.setStyle({fill: '#0ff'});
    }
}