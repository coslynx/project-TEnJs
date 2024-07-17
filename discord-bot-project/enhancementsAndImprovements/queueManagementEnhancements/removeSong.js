const removeSong = (queue, songIndex) => {
    if (queue.length === 0) {
        return "The queue is empty. No songs to remove.";
    }

    if (songIndex < 1 || songIndex > queue.length) {
        return "Invalid song index. Please provide a valid song index to remove.";
    }

    const removedSong = queue[songIndex - 1];
    queue.splice(songIndex - 1, 1);

    return `Removed song at index ${songIndex}: ${removedSong}`;
};

module.exports = removeSong;