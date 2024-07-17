const clearSpecificSongs = (queue, songsToRemove) => {
    // Check if the queue is empty
    if (queue.length === 0) {
        return "The queue is already empty.";
    }

    // Filter out the songs to remove from the queue
    const updatedQueue = queue.filter(song => !songsToRemove.includes(song));

    // Check if any songs were removed
    if (updatedQueue.length === queue.length) {
        return "The specified songs are not in the queue.";
    }

    // Update the queue with the remaining songs
    queue = updatedQueue;

    return "Specified songs have been removed from the queue.";
};

module.exports = clearSpecificSongs;