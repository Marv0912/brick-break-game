class Paddle {
    constructor() {
        this.width = 50;
        this.height = 20;
        this.direction = 250;
        this.speed = 0;
        this.maxSpeed = 10;
    }
    move() {
        if (this.direction <= 0) {
            this.direction *= -1;
        }
        else if (this.direction >= 500) {
            this.direction *= -1
        }
    }
}

