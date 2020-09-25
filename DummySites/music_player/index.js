// Get Song and create new audio
let song = document.getElementById('music');
let value = song.options[song.selectedIndex].value;
let audio = new Audio(`./assets/${value}.mp3`);

// Get Song playing text
let songPlayingText = document.querySelector('.song-playing');
let playText = document.querySelector('.play');

// Pause Play State
let songPlaying = false;

// Play the music
function play() {
  if (songPlaying === false) {
    audio.play();
    songPlayingText.innerHTML = `${value} is Playing`;
    playText.innerHTML = 'Pause';
    playText.style.backgroundColor = 'yellow';
    songPlaying = true;
  } else if (songPlaying === true) {
    audio.pause();
    songPlayingText.innerHTML = `${value} is Paused`;
    playText.innerHTML = 'Play';
    playText.style.backgroundColor = 'green';
    songPlaying = false;
  }
}

// Stop the music
function stop() {
  audio.pause();
  audio.currentTime = 0;
  songPlayingText.innerHTML = 'No song is playing';
  songPlaying = false;
}

// Select the song
function select() {
  value = song.options[song.selectedIndex].value;
  audio = new Audio(`./assets/${value}.mp3`);
}
