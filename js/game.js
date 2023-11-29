class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameContainer = document.getElementById('game-container')
        this.width = 550;
        this.height = 350;
        this.ball = new Ball(this.gameScreen, 268, 350, 10, 'assets/ball.png', this);
        this.paddle = new Paddle(this.gameScreen, 240, 370, 75, 15, 'assets/paddle.png', this);
        this.score = 0;
        this.lives = 3;
        this.bricks = [];
        this.createBricks();
        this.gameIsOver = false;
        
    }

    createBricks() {
        for (let row = 0; row < 4; row++) {
            this.bricks[row] = [];
            for (let col = 0; col < 5; col++) {
                const x = col * (110); 
                const y = row * (40);  
                const brick = new Brick(this.gameScreen, x, y, 50, 10, 'assets/brick.png');
                this.bricks[row].push(brick);
            }
        }
    }

    start() {
        console.log('start')
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'inherit'
        this.gameContainer.style.display = 'block';
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) {
            return;
        }

        this.update();
        // Additional game loop logic
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        console.log('update')
        // this.paddle.move();
        this.ball.move();
        this.ball.checkBallCollisions(this.paddle, this.bricks);

        if (this.ball.y > this.height + 50) {
            this.loseLife()
        }
        this.checkWin()
    }
    updateScore() {
        this.score += 10;
        document.getElementById('score').textContent = `${this.score}`
    }
    loseLife() {
        this.lives -= 1;
        document.getElementById('lives').textContent = `${this.lives}`

        if (this.lives <= 0) {
            this.endGame();
        } else {
            this.resetBall();
        }
    }
    resetBall() {
        this.ball.reset()
        this.paddle.reset()
    }

    checkWin() {
        const allBricksBroken = this.bricks.every(row => row.every(brick => brick.status === 0));

        if (allBricksBroken) {
            this.winGame()
        }
    }

    winGame() {
        this.gameIsOver = true;
        document.getElementById('win-image').style.display = 'block';
    
    }
    endGame() {
        this.gameIsOver = true;
        document.getElementById('lose-image').style.display = 'block';
    }

}