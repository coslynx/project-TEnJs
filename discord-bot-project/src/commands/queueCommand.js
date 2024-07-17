const queueCommand = () => {
    // Retrieve the current music queue
    const currentQueue = queueManagement.getQueue();

    // Check if the queue is empty
    if (currentQueue.length === 0) {
        return "The music queue is currently empty.";
    }

    // Format the queue information for display
    let queueInfo = "Music Queue:\n";
    currentQueue.forEach((song, index) => {
        queueInfo += `${index + 1}. ${song.title} - ${song.artist}\n`;
    });

    return queueInfo;
};

module.exports = queueCommand;