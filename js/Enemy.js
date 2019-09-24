class Enemy {
  update(timeDiff) {
    this.x = this.x - timeDiff * this.speed;
    this.domElement.style.left = this.x + "px";
    if (this.x < 0) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }

  }
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = GAME_WIDTH;
    this.y = enemySpot * ENEMY_WIDTH;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/ball.png";
    this.domElement.width = "75";
    this.domElement.height = "75";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
    setInterval(function increase() {
    this.speed * 2;
        }, 1000);
  }
}
