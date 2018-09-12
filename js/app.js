'use strict';
// Enemies our player must avoid
class Enemy { 
    constructor(ex, ey, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = ex;
        this.y = ey;
        this.speed = speed;
    
    };

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        //Random Speed
        this.x += this.speed * dt;

        if (this.x > 505) {
            this.x = -50;
            this.speed = 100 + Math.floor(Math.random() * 200);
        };

        //Check Collision 
        if ((player.x < this.x + 80) && (player.x + 80 > this.x) && (player.y < this.y + 60) && (player.y + 60 > this.y)) {
            player.x = 202;
            player.y = 404;
        };

    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player { 
    constructor(px, py) {
        this.sprite = 'images/char-boy.png';
        this.x = px;
        this.y = py;
    };

    update() {

    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    handleInput(keyPress) {
        if (keyPress === 'left' && this.x > 0) {
            this.x -= 101;
        } else if (keyPress === 'right' && this.x < 404) {
            this.x += 101;
        } else if (keyPress === 'up' && this.y > 0) {
            this.y -= 83;
        } else if (keyPress === 'down' && this.y < 404) {
            this.y += 83;
        }

        //Player Win Restart Game 
        const playerWin = this;
        if (this.y < 0) {
            setTimeout(() => {
                playerWin.x = 202;
                playerWin.y = 404;
                alert("Congratulation! You Won!");
            }, 600);
        }
    };
}    

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(202, 404);

const allEnemies = [new Enemy(-100, 63 , 200),
                    new Enemy(0, 145 , 200), 
                    new Enemy(-250, 227 , 200), 
                    new Enemy(-350, 63 , 200),
                    new Enemy(-250, 145 , 200), 
                    new Enemy(-450, 227 , 200)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', ({keyCode}) => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[keyCode]);
});

function btop() {if(player.y > 0) player.y -= 83;}

function bleft() {if(player.x > 0) player.x -= 102;}

function bright() {if(player.x < 405) player.x += 102;}

function bbottom() {if(player.y < 405) player.y += 83;}

if (player.y < 0) {
   setTimeout(() => {
      player.x = 202;
      player.y = 404;
      alert("Congratulation! You Won!");
   }, 600);
}
