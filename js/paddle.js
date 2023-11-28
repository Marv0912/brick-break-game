class Paddle {
    constructor(gameScreen, left, top, width, height, element) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.speed = 25;
        this.element = document.createElement('img');
        this.element.src = `${element}`;
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.gameScreen.appendChild(this.element);

        this.updatePosition();
    }

    move(direction) {
        if (direction === 'left') this.left -= this.speed;
        if (direction === 'right') this.left += this.speed;

        // Keep the paddle within the game screen boundaries
        if (this.left < 0) this.left = 0;
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}