// List of songs
const songs = [
  {
    title: "Song 1",
    artist: "Artist A",
    file: "music/song1.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist B",
    file: "music/song2.mp3"
  }
];

const musicList = document.getElementById("music-list");
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("now-playing");

// Display songs
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = ${song.title} - ${song.artist};
  li.addEventListener("click", () => {
    audio.src = song.file;
    audio.play();
    nowPlaying.textContent = Now Playing: ${song.title} - ${song.artist};
  });
  musicList.appendChild(li);
});
