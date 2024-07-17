const playMusic = (source, song) => {
    // Logic to play music from the specified source
    console.log(`Playing ${song} from ${source}`);
};

const adjustVolume = (level) => {
    // Logic to adjust the playback volume
    console.log(`Adjusting volume to ${level}`);
};

const addToQueue = (song) => {
    // Logic to add a song to the music queue
    console.log(`Adding ${song} to the queue`);
};

const playNextSong = () => {
    // Logic to play the next song in the queue
    console.log(`Playing the next song`);
};

// Implementing the use case scenario
playMusic("YouTube", "Song Name");
adjustVolume(50);
addToQueue("Next Song");
playNextSong();