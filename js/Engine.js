class Engine {
  gameLoop = () => {
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      let spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    this.record.update("SCORE:" + score);
    if (this.isPlayerDead()) {
      window.alert("Game over");
      score = 0;
      MAX_ENEMIES = 2;
    }
    if (score < 1000) {
      this.player.domElement.src = "images/pid1.png";
    } else if (score >= 1000 && score <= 3000) {
      this.player.domElement.src = "images/pid2.png";
    } else if (score > 3000) {
      this.player.domElement.src = "images/pid3.png";
    }

    setTimeout(this.gameLoop, 20);
  };
  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      if (
        this.player.x < this.enemies[i].x + ENEMY_WIDTH &&
        this.player.x + PLAYER_WIDTH > this.enemies[i].x &&
        this.player.y < this.enemies[i].y + ENEMY_HEIGHT &&
        this.player.y + PLAYER_HEIGHT > this.enemies[i].y
      ) {
        return true;
      }
      score++;
    }
  };
  constructor(theRoot) {
    this.root = theRoot;
    this.enemies = [];
    addBackground(this.root);
    this.record = new Text(theRoot, 10, 10);
    this.image = undefined;
    this.player = new Player(this.root);
  }
}
