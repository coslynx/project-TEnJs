const queueManagement = {
    queue: [],
    nowPlaying: null,
    isPlaying: false,
  
    addToQueue: function(song) {
      this.queue.push(song);
      if (!this.isPlaying) {
        this.playNext();
      }
    },
  
    playNext: function() {
      if (this.queue.length === 0) {
        this.isPlaying = false;
        this.nowPlaying = null;
        return;
      }
      const song = this.queue.shift();
      this.nowPlaying = song;
      this.isPlaying = true;
      // Logic to play the song
      console.log(`Now playing: ${song}`);
    },
  
    removeSong: function(index) {
      if (index < 0 || index >= this.queue.length) {
        console.log("Invalid song index to remove");
        return;
      }
      this.queue.splice(index, 1);
    },
  
    moveSong: function(fromIndex, toIndex) {
      if (fromIndex < 0 || fromIndex >= this.queue.length || toIndex < 0 || toIndex >= this.queue.length) {
        console.log("Invalid song indexes to move");
        return;
      }
      const [song] = this.queue.splice(fromIndex, 1);
      this.queue.splice(toIndex, 0, song);
    },
  
    clearQueue: function() {
      this.queue = [];
      this.isPlaying = false;
      this.nowPlaying = null;
    }
  };
  
  module.exports = queueManagement;