class Video {
  constructor(root) {
    this.vid = document.createElement("video");
    this.vid.src = "images/video1.mp4";
    this.vid.type = "video/mp4";
    this.vid.height = 500;
    this.vid.width = 500;
    this.vid.autoplay = true;
    this.vid.muted = true;
    this.vid.style.position = "absolute";
    this.vid.style.left = 250;
    this.vid.style.top = 40;
    this.vid.style.zIndex = 3000;
    root.appendChild(this.vid);
  }
}
