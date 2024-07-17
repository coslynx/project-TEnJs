const fetch = require('node-fetch');

const fetchLyrics = async (songTitle, artist) => {
    const apiKey = 'YOUR_GENIUS_API_KEY';
    const apiUrl = `https://api.genius.com/search?q=${songTitle} ${artist}`;
    
    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch lyrics');
        }

        const data = await response.json();
        const songData = data.response.hits[0].result;

        // Extract lyrics from the song data
        const lyrics = songData.lyrics;

        return lyrics;
    } catch (error) {
        console.error(error);
        return 'Lyrics not found';
    }
};

module.exports = { fetchLyrics };