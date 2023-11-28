class Brick {
    constructor(gameScreen, x, y, width, height, element) {
        this.gameScreen = gameScreen;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.status = 1;
        this.element = document.createElement('img');
        this.element.src = `${element}`;
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.gameScreen.appendChild(this.element);
    }
}