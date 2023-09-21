const btns = document.querySelectorAll('.btn-modal');
const videoContainers = document.querySelectorAll('.video-container');
let currentVideo;

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const id = this.getAttribute('data-id');
    const videoContainer = document.querySelector(`.video-container[data-id="${id}"]`);
    const videoElement = videoContainer.querySelector('video');

    videoContainer.classList.add('show');
    currentVideo = videoElement; // Store the currently playing video
  });
});

videoContainers.forEach(videoContainer => {
  const close = videoContainer.querySelector('.close');
  const videoElement = videoContainer.querySelector('video');

  close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    videoElement.pause();
    videoElement.currentTime = 0;
  });

  // Close the video when clicking outside of the video or the close button
  videoContainer.addEventListener('click', function(e) {
    if (e.target === videoContainer) {
      videoContainer.classList.remove('show');
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  });
});

// Close the video when pressing the "Escape" key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" && currentVideo) {
    const videoContainer = currentVideo.closest('.video-container');
    videoContainer.classList.remove('show');
    currentVideo.pause();
    currentVideo.currentTime = 0;
  }
});

