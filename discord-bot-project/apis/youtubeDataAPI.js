const fetch = require('node-fetch');

// Function to fetch song information from YouTube Data API
const fetchSongInfo = async (songName) => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${songName}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items.length === 0) {
            return "No results found for the provided song name.";
        }

        const videoId = data.items[0].id.videoId;
        const videoTitle = data.items[0].snippet.title;
        const videoThumbnail = data.items[0].snippet.thumbnails.default.url;

        return { videoId, videoTitle, videoThumbnail };
    } catch (error) {
        console.error("Error fetching song information:", error);
        return "An error occurred while fetching song information.";
    }
};

module.exports = { fetchSongInfo };