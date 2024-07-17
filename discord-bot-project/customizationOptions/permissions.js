const permissions = {
  roles: [
    {
      name: 'admin',
      permissions: ['play', 'pause', 'skip', 'volume', 'queue', 'nowPlaying', 'createPlaylist', 'shufflePlaylist', 'repeatPlaylist', 'clearPlaylist', 'moveSong', 'removeSong', 'clearSpecificSongs', 'lyricsDisplay'],
    },
    {
      name: 'member',
      permissions: ['play', 'pause', 'skip', 'volume', 'queue', 'nowPlaying', 'createPlaylist', 'shufflePlaylist', 'repeatPlaylist', 'clearPlaylist'],
    },
    {
      name: 'guest',
      permissions: ['play', 'pause', 'skip', 'queue', 'nowPlaying'],
    },
  ],
  
  checkPermissions: function(role, command) {
    const selectedRole = this.roles.find(r => r.name === role);
    if (selectedRole) {
      return selectedRole.permissions.includes(command);
    } else {
      return false;
    }
  },
};

module.exports = permissions;