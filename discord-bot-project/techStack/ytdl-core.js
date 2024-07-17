const ytdl = require('ytdl-core');

// Function to play music from YouTube
function playFromYouTube(link) {
    if (ytdl.validateURL(link)) {
        const stream = ytdl(link, { filter: 'audioonly' });
        // Play the audio stream in the voice channel
        // Your implementation here
    } else {
        // Invalid YouTube link
        // Handle error or provide feedback to the user
    }
}

module.exports = { playFromYouTube };