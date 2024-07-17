const fs = require('fs');
const { Client, VoiceChannel, VoiceConnection, StreamDispatcher } = require('discord.js');
const { Readable } = require('stream');

/**
 * Function to handle playing music from local files
 * @param {Client} client - The Discord client
 * @param {VoiceChannel} voiceChannel - The voice channel to play music in
 * @param {string} filePath - The path to the local music file
 */
async function playLocalFile(client, voiceChannel, filePath) {
    if (!voiceChannel) {
        return console.log('You need to be in a voice channel to play music!');
    }

    try {
        // Join the voice channel
        const connection = await voiceChannel.join();
        console.log('Connected to voice channel');

        // Create a readable stream from the local file
        const stream = fs.createReadStream(filePath);

        // Play the music
        const dispatcher = connection.play(Readable.from(stream), { type: 'converted' });

        dispatcher.on('finish', () => {
            // Leave the voice channel after the music ends
            voiceChannel.leave();
            console.log('Music playback finished');
        });
    } catch (error) {
        console.error('Error playing local file:', error);
    }
}

module.exports = {
    playLocalFile
};