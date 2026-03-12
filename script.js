const archiveData = {
  main: {
    title: "THE CROSSROADS",
    msg: "Look at this crowd. Thousands of them. In 1945, you couldn't move on this sidewalk without bumping into a worker from the Roebling mills. Today? It's quiet. The buildings are still here, but the noise... the noise is gone.",
    audio: "audio/main.mp3",
  },
  clock: {
    title: "THE CLOCK SPEAKS",
    msg: "I’ve been the heartbeat of this corner for 80 years. I saw the WWII 'Welcome Home' banners go up, and I saw them rot away. I’m a Ballantine landmark. I don't just tell time; I tell the history of a city that used to make everything the world needed.",
    audio: "audio/clock.mp3",
  },
  bottle: {
    title: "THE SPIRIT OF TRENTON",
    msg: "Ballantine Ale. Purity, Body, Flavor. We were the largest privately held brewery in the country. This wooden sign hung in a bar where men shared a drink after a 12-hour shift. We didn't just brew beer; we fueled the community.",
    audio: "audio/bottle.mp3",
  },
};

let currentAudio = null;

function speak(key) {
  const data = archiveData[key];

  // Update UI
  document.getElementById("title").innerText = data.title;
  document.getElementById("message").innerText = data.msg;
  document.getElementById("speech-box").style.display = "block";

  // Stop any audio currently playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Play the new human audio file
  currentAudio = new Audio(data.audio);
  currentAudio.play().catch((error) => {
    console.log("Audio playback failed. Interaction required first.");
  });
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  document.getElementById("speech-box").style.display = "none";
}
