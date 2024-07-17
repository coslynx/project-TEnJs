const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Function to create a new playlist in the database
const createPlaylist = async (playlistName, userId) => {
  try {
    const newPlaylist = await prisma.playlist.create({
      data: {
        name: playlistName,
        userId: userId,
      },
    });
    return newPlaylist;
  } catch (error) {
    console.error(`Error creating playlist: ${error.message}`);
    return null;
  }
};

// Function to add a song to a playlist
const addSongToPlaylist = async (playlistId, songId) => {
  try {
    const updatedPlaylist = await prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          connect: { id: songId },
        },
      },
    });
    return updatedPlaylist;
  } catch (error) {
    console.error(`Error adding song to playlist: ${error.message}`);
    return null;
  }
};

// Function to get all playlists for a user
const getUserPlaylists = async (userId) => {
  try {
    const playlists = await prisma.playlist.findMany({
      where: { userId: userId },
    });
    return playlists;
  } catch (error) {
    console.error(`Error getting user playlists: ${error.message}`);
    return null;
  }
};

module.exports = { createPlaylist, addSongToPlaylist, getUserPlaylists };