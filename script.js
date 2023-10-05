// script.js
const buttons = document.querySelectorAll(".button");
const videoContainer = document.querySelector(".video-container");
const popupVideo = document.getElementById("popup-video");
const closeButton = document.querySelector(".close-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const videoPath = button.getAttribute("data-video");
    popupVideo.src = videoPath;
    videoContainer.style.display = "flex";
    popupVideo.load(); // Загрузить выбранное видео
    popupVideo.play(); // Воспроизвести видео
  });
});

videoContainer.addEventListener("click", () => {
  videoContainer.style.display = "none";
  popupVideo.pause();
});

closeButton.addEventListener("click", () => {
  videoContainer.style.display = "none";
  popupVideo.pause();
});

// Опционально: остановить видео при закрытии окна
videoContainer.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    videoContainer.style.display = "none";
    popupVideo.pause();
  }
});
