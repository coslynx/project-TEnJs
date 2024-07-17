const fetch = require('node-fetch');
const { LyricsGenius } = require('lyrics-genius');

const geniusAPIKey = 'YOUR_GENIUS_API_KEY';
const genius = new LyricsGenius(geniusAPIKey);

const getLyrics = async (songTitle, artist) => {
    try {
        const searchQuery = `${songTitle} ${artist}`;
        const response = await genius.search(searchQuery);
        
        if (response && response.hits.length > 0) {
            const topResult = response.hits[0].result;
            const lyrics = topResult.lyrics;
            return lyrics;
        } else {
            return 'Lyrics not found for this song.';
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        return 'An error occurred while fetching lyrics.';
    }
};

module.exports = { getLyrics };