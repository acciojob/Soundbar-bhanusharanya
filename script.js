//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const sounds = ['applause', 'boo', 'gasp','tada','victory','wrong','stop']; // Add your sound file names here
  const buttonsContainer = document.getElementById('buttons');

  // Function to create buttons for each sound
  sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = sound;
    btn.addEventListener('click', () => playSound(sound));
    buttonsContainer.appendChild(btn);
  });

  const stopBtn = document.querySelector('.stop');
  stopBtn.addEventListener('click', stopSound);

  let currentSound = null;

  // Function to play the sound
  function playSound(sound) {
    stopSound();
    currentSound = new Audio(`./sounds/${sound}.mp3`);
    currentSound.play();
  }

  // Function to stop the sound
  function stopSound() {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
  }
});
