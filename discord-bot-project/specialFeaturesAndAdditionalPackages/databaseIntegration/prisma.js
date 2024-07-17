import { PrismaClient } from '@prisma/client';

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
      include: { songs: true },
    });
    return playlists;
  } catch (error) {
    console.error(`Error getting user playlists: ${error.message}`);
    return null;
  }
};

// Function to delete a playlist
const deletePlaylist = async (playlistId) => {
  try {
    const deletedPlaylist = await prisma.playlist.delete({
      where: { id: playlistId },
    });
    return deletedPlaylist;
  } catch (error) {
    console.error(`Error deleting playlist: ${error.message}`);
    return null;
  }
};

export { createPlaylist, addSongToPlaylist, getUserPlaylists, deletePlaylist };