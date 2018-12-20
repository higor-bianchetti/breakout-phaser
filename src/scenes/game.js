export class Breakout extends Phaser.Scene {

    constructor() {
        super({ key: "Breakout" });

        // ================================ Tela ===============================
        this.backgroundColor = '#8CFF98';   // Cor de fundo
        this.screenWidth = 800;             // Largura total do jogo
        this.gridInitX = 112;               // Posição inicial X do grid de tijolos
        this.gridInitY = 75;                // Posição inicial Y do grid de tijolos
        // =====================================================================
        // ============================== Tijolos ==============================
        this.bricks;
        this.bricksRow = 10;                // Quantidade de tijolos por linha
        this.brickWidth = 64;               // Largura
        this.brickHeigth = 32;              // Altura
        this.bricksKeys = [                 // Nome dos assets
            'gold_brick', 'bronze_brick', 'purple_brick',
            'red_brick', 'green_brick', 'blue_brick',
        ];
        // =====================================================================
        // ================================ Bola ===============================
        this.ball;
        this.ballInitX = 400;               // Posição inicial X
        this.ballInitY = 530;               // Posição Inicial Y
        // =====================================================================
        // ============================== Barreira =============================
        this.paddle;
        this.paddleInitX = 400;             // Posição inicial X
        this.paddleInitY = 550;             // Posição inicial Y
        this.paddleWidth = 104;             // Largura
        // =====================================================================
    }

    preload() {
        this.cameras.main.setBackgroundColor(this.backgroundColor);

        this.load.image('purple_brick', 'assets/img/purple1.png');
        this.load.image('bronze_brick', 'assets/img/bronze1.png');
        this.load.image('green_brick', 'assets/img/green1.png');
        this.load.image('blue_brick', 'assets/img/blue1.png');
        this.load.image('gold_brick', 'assets/img/gold1.png');
        this.load.image('red_brick', 'assets/img/red1.png');

        this.load.image('ball', '../assets/img/ball.png');
        this.load.image('paddle', '../assets/img/paddle.png');
    }

    create() {
        // Definindo os limites do jogo
        this.physics.world.setBoundsCollision(true, true, true, false);

        // Posicionando os tijolos
        this.bricks = this.physics.add.staticGroup();
        for(let i = 0; i < this.bricksKeys.length; i++) {
            for(let j = 0; j < this.bricksRow; j++) {
                this.bricks.create(
                    this.gridInitX + (this.brickWidth + 1) * j,
                    this.gridInitY + (this.brickHeigth + 1) * i,
                    this.bricksKeys[i]
                );
            }
        }

        // Criando e add propriedades à bola
        this.ball = this.physics.add.image(this.ballInitX, this.ballInitY, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setData('onPaddle', true);

        // Criando a barreira
        this.paddle = this.physics.add.image(this.paddleInitX, this.paddleInitY, 'paddle');
        this.paddle.setImmovable();

        // Movimenta a barreira
        this.input.on('pointermove', (pointer) => {this.movePaddle(pointer)}, this);
    }

    movePaddle(pointer) {
        // Define os limites no qual a barreira pode se movimentar
        this.paddle.x = Phaser.Math.Clamp(
            pointer.x, 
            this.paddleWidth / 2, 
            this.screenWidth - this.paddleWidth / 2
        );

        // Faz com que a bola se movimente junto com a barreira
        if(this.ball.getData('onPaddle')) {
            this.ball.x = this.paddle.x;
        }
    }
}