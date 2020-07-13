class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.car = new Player(this, 200, 550, 100, 150);
    this.obstacles = [];
    this.gas = [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createObstacles();
    this.createGas();
  }

  start() {
    this.drawBackground();
    this.drawMainCharacter();
    setInterval(() => {
      this.clear();
      this.drawBackground();
      this.drawMainCharacter();
      this.car.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
        this.obstacles[i].draw();
        this.car.crashCollision(this.obstacles[i]);
        if (this.obstacles[i].y > 800) {
          this.obstacles.splice(i, 1);
        }
      }
    }, 1000 / 60);
  }

  createObstacles() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.obstacles.push(new Obstacle(this));
    }

    setTimeout(() => {
      this.createObstacles();
    }, 3000);
  }

  drawBackground() {
    this.backgroundImg.src = "images/road2.png";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawMainCharacter() {
    this.car.drawComponent("images/playercar.png");
  }

  drawGasIcons() {
    this.drawGasIcons ("gas", "images/gas.png", 22, 22);
  }    

  clear() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

xxxxxxxxxxxx class State {
  constructor(start,player, status) {
    this.start = start;
    this.player = player;
    this.status = status;
  }

  static start(level) {
    return new State(level, start.startPlayer, "playing");
  }

  get player() {
    return this.player.find(a => a.type == "player");
  }
}
  }
}
  }
}
//