const moveSong = (queue, songIndex, newPosition) => {
    if (songIndex < 0 || songIndex >= queue.length) {
        console.log("Invalid song index. Please provide a valid index.");
        return queue;
    }

    if (newPosition < 0 || newPosition >= queue.length) {
        console.log("Invalid new position. Please provide a valid position.");
        return queue;
    }

    const [movedSong] = queue.splice(songIndex, 1);
    queue.splice(newPosition, 0, movedSong);

    console.log(`Moved song to position ${newPosition}.`);
    return queue;
};

module.exports = moveSong;