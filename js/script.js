window.onload = function () {
    const startButton = document.getElementById("start-button");
    const tryAgainButton = document.getElementById('try-again-button');
    let game;
    startButton.addEventListener("click", function () {
        game = new Game();
        startGame();
    })
    tryAgainButton.addEventListener('click', function() {
        document.getElementById('win-image').style.display = 'none';
        document.getElementById('lose-image').style.display = 'none';

        game = new Game();
        game.start();
    })

    function startGame() {
        console.log('start game');
        game.start();
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                game.paddle.move('left');
            } else if (event.key === 'ArrowRight') {
                game.paddle.move('right');
            }
        });
        
    }
}