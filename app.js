

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if (this.x >= 505) {
      this.x = -200;

}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Player.prototype.checkWin = function() {
    if (this.y < 50) {
        this.y = 435;
        this.x = 200;
        alert("You Win!");
    }
}

var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}




Player.prototype.checkCollisions = function()

var enemySize = {x: 101, y: 171, width: 101, height: 171}
var playerSize = {x: 101, y: 171, width: 101, height: 171}

if (enemySize.x < playerSize.x + playerSize.width &&
   enemySize.x + enemySize.width > playerSize.x &&
   enemySize.y < playerSize.y + playerSize.height &&
   enemySize.height + enemySize.y > playerSize.y) {
   alert("Try Again");
   this.y = 435;
   this.x = 200
};


Player.prototype.update = function(dt) {


//this.checkCollisions();

    if (this.x < -10) {
        this.x = -10;
    }
    else if (this.x > 415) {
        this.x = 415;
    }
    else if (this.y < 15) {
        this.checkWin();
    }
    else if (this.y > 435) {
        this.y = 435;
    }

};



Player.prototype.handleInput= function(key) {
    switch (key) {
        case "left":
            this.x = this.x - 25;
        break;
        case "right":
            this.x = this.x + 25;
        break;
        case "up":
            this.y = this.y - 25;
        break;
        case "down":
            this.y = this.y + 25;
        break;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array allEnemies

var bug1 = new Enemy(-350, 63, 300);
var bug2 = new Enemy(-100, 145, 200);
var bug3 = new Enemy(-200, 227, 300);
var bug4 = new Enemy(-750, 63, 400);
var bug5 = new Enemy(-1250, 227, 500);

var allEnemies = [bug1, bug2, bug3, bug4, bug5];



// Place the player object in a variable called player

var player = new Player(200, 435, 75);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
