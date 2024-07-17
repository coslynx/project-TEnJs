const playSpecificSong = (songName, source) => {
    if (source === 'YouTube') {
        // Logic to play the song from YouTube
        console.log(`Playing ${songName} from YouTube.`);
    } else if (source === 'Spotify') {
        // Logic to play the song from Spotify
        console.log(`Playing ${songName} from Spotify.`);
    } else {
        // Logic to play the song from local files
        console.log(`Playing ${songName} from local files.`);
    }
}

// Example of playing a specific song from YouTube
playSpecificSong('SongTitle', 'YouTube');