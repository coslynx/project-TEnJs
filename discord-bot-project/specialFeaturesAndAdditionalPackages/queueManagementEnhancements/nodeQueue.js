const Queue = require('queue');

class NodeQueue {
    constructor() {
        this.queue = new Queue();
    }

    addSong(song) {
        this.queue.push(song);
    }

    removeSong(index) {
        if (index >= 0 && index < this.queue.length) {
            this.queue.splice(index, 1);
        }
    }

    moveSong(oldIndex, newIndex) {
        if (oldIndex >= 0 && oldIndex < this.queue.length && newIndex >= 0 && newIndex < this.queue.length) {
            const [song] = this.queue.splice(oldIndex, 1);
            this.queue.splice(newIndex, 0, song);
        }
    }

    clearQueue() {
        this.queue = [];
    }

    getQueue() {
        return this.queue;
    }
}

module.exports = NodeQueue;