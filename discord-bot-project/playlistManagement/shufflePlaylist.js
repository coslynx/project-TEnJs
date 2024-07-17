const shufflePlaylist = (playlist) => {
    // Check if the playlist is empty
    if (playlist.length === 0) {
        return "Playlist is empty. Add songs to shuffle.";
    }

    // Shuffle the playlist using Fisher-Yates algorithm
    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }

    return "Playlist shuffled successfully.";
};

module.exports = shufflePlaylist;