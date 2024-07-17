const createSharedMusicLibrary = (community) => {
    // Logic to create and manage shared music library playlists
    const sharedPlaylists = [];
    
    const addSongToPlaylist = (playlist, song) => {
        playlist.push(song);
    };
    
    const createPlaylist = (name) => {
        const newPlaylist = [];
        sharedPlaylists.push({ name, songs: newPlaylist });
    };
    
    const removePlaylist = (playlistName) => {
        const index = sharedPlaylists.findIndex(playlist => playlist.name === playlistName);
        if (index !== -1) {
            sharedPlaylists.splice(index, 1);
        }
    };
    
    return {
        sharedPlaylists,
        addSongToPlaylist,
        createPlaylist,
        removePlaylist
    };
};

const community = "Discord Community";
const sharedMusicLibrary = createSharedMusicLibrary(community);

sharedMusicLibrary.createPlaylist("Chill Vibes");
sharedMusicLibrary.addSongToPlaylist("Chill Vibes", "Lo-fi Beats");
sharedMusicLibrary.addSongToPlaylist("Chill Vibes", "Relaxing Jazz");
sharedMusicLibrary.addSongToPlaylist("Chill Vibes", "Acoustic Covers");

sharedMusicLibrary.createPlaylist("Party Mix");
sharedMusicLibrary.addSongToPlaylist("Party Mix", "Dance Hits");
sharedMusicLibrary.addSongToPlaylist("Party Mix", "Pop Anthems");
sharedMusicLibrary.addSongToPlaylist("Party Mix", "EDM Bangers");

sharedMusicLibrary.removePlaylist("Party Mix");

console.log(sharedMusicLibrary.sharedPlaylists);