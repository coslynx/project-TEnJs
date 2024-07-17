const ytdl = require('ytdl-core');

// Function to play music from YouTube
function playFromYouTube(link) {
    // Check if the link is a valid YouTube link
    if (ytdl.validateURL(link)) {
        // Get video info
        ytdl.getInfo(link, (err, info) => {
            if (err) {
                console.error(err);
                return;
            }
            // Play the audio stream
            const stream = ytdl(link, { filter: 'audioonly' });
            // Implement logic to handle the audio stream (e.g., play in voice channel)
        });
    } else {
        console.error('Invalid YouTube link provided');
    }
}

module.exports = {
    playFromYouTube,
};