const { Genius } = require('genius-api');

const genius = new Genius('YOUR_GENIUS_API_KEY');

const fetchLyrics = async (songTitle, artistName) => {
  try {
    const searchResults = await genius.search(songTitle + ' ' + artistName);
    const firstSong = searchResults[0];
    
    if (!firstSong) {
      return 'Lyrics not found for this song.';
    }
    
    const lyrics = await genius.lyrics(firstSong.id);
    
    return lyrics;
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return 'Failed to fetch lyrics. Please try again later.';
  }
};

module.exports = { fetchLyrics };