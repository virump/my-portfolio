const videoFiles = [
  "/imges/14221288-hd_1920_1080_30fps.mp4",
  "/imges/4990238-hd_1920_1080_30fps.mp4"
];
let currentVideo = 0;
const videoElement = document.getElementById("portfolioVideo");
const switchInput = document.getElementById("switchVideo");

// Set initial state
switchInput.checked = false;

switchInput.addEventListener("change", function () {
  currentVideo = switchInput.checked ? 1 : 0;
  videoElement.src = videoFiles[currentVideo];
  videoElement.load();
  videoElement.play();
});