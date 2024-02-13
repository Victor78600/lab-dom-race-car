class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player (
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        );
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        // code to be added
    }
        start(){
            this.gameScreen.style.height = `${this.height}px`;
            this.gameScreen.style.width = `${this.width}px`;

            this.startScreen.style.display = "none";

            this.gameScreen.style.display = "block";

            this.gameLoop()

        };

        gameLoop(){
            console.log("in the game loop");
            if (this.gameIsOver){
                return;
            }

            this.update();

            window.requestAnimationFrame(() => this.gameLoop());

        }

        update(){
            this.player.move()
            for (let i = 0; i < this.obstacles.length; i++) {
                const obstacle = this.obstacles[i];
                obstacle.move()
                if (this.player.didCollide(obstacle)) {
                    // Remove the obstacle element from the DOM
                    obstacle.element.remove();
                    // Remove obstacle object from the array
                    this.obstacles.splice(i, 1);
                    // Reduce player's lives by 1
                    this.lives--
                    i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--
    }
}

// If the lives are 0, end the game
if (this.lives === 0) {
  this.endGame();
}if (Math.random() > 0.98 && this.obstacles.length < 1) {
    this.obstacles.push(new Obstacle(this.gameScreen));
  }
}

// Create a new method responsible for ending the game
endGame() {
  this.player.element.remove();
  this.obstacles.forEach(obstacle => obstacle.element.remove());

  this.gameIsOver = true;

  // Hide game screen
  this.gameScreen.style.display = "none";
  // Show end game screen
  this.gameEndScreen.style.display = "block";

            console.log("in the update")
        }

}