// const SOUND_FILE = "./Audio/done.wav";

// class AudioControl {
//   constructor(muted) {
//     this.audio = new Audio(SOUND_FILE);
//     this.audio.muted = muted;
//   }

//   mute(mute) {
//     this.audio.muted = mute;
//   }

//   play(play) {
//     if (play) {
//       this.audio.currentTime = 0;
//       this.audio.play();
//     } else {
//       this.audio.pause();
//       this.audio.currentTime = 0;
//     }
//   }
// }

// export default AudioControl;

const SOUND_FILE = "../../../public/done.wav";

class AudioControl {
  constructor(muted) {
    this.audio = new Audio();
    this.audio.src = SOUND_FILE;
    this.audio.muted = muted;
  }

  mute(mute) {
    this.audio.muted = mute;
  }

  play(play) {
    if (play) {
      this.audio.currentTime = 0;
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}

export default AudioControl;
