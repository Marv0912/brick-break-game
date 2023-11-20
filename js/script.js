window.onload = function () {
    const startButton = document.getElementById("start-button");
    const tryAgainButton = document.getElementById('try-again-button');
    let game;
    startButton.addEventListener("click", function () {
        game = new Game();
        startGame();
    })

    function startGame() {
        console.log('start game');
    }
}