class Ball {
    constructor(gameScreen, x, y, radius, element, game) {
        this.game = game;
        this.gameScreen = gameScreen;
        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
        this.isStuck = true
        this.radius = radius;
        this.speedX = 2;
        this.speedY = -2;
        this.element = document.createElement('img');
        this.element.src = `${element}`;
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.radius * 2}px`;
        this.element.style.height = `${this.radius * 2}px`;
        this.gameScreen.appendChild(this.element);
        this.updatePosition();
    }
    move() {
        if (!this.isStuck) {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        // Collision detection with the walls
        if (this.x <= 0 || this.x + this.radius * 2 >= this.gameScreen.offsetWidth) {
            this.speedX *= -1; 
        }
        if (this.y <= 0) {
            this.speedY *= -1; 
        }

        this.updatePosition();
    }
    
    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
    
    checkBallCollisions(paddle, bricks) {
        // Check collision with the paddle
        if (this.isColliding(paddle)) {
            this.speedY *= -1; // Reverse the ball's vertical direction
        }
        
        // Check collision with each brick
        bricks.forEach((row) => {
            row.forEach((brick) => {
                if (brick.status && this.isColliding(brick)) {
                    brick.status = 0; 
                    brick.element.style.display = 'none'; 
                    this.speedY *= -1.1; 
                    this.game.updateScore()
                }
            });
        });
    }
    
    isColliding(object) {
        const ballRect = this.element.getBoundingClientRect();
        const objectRect = object.element.getBoundingClientRect();
        
        return ballRect.right > objectRect.left &&
        ballRect.left < objectRect.right &&
        ballRect.bottom > objectRect.top &&
        ballRect.top < objectRect.bottom;
    }

    release() {
        this.isStuck = false;
    }

    reset() {
        this.x = 268;
        this.y = 350;
        this.speedX = 3;
        this.speedY = -3;
        this.isStuck = true;
        this.updatePosition();
    }
}