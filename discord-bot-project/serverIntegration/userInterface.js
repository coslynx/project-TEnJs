const Discord = require('discord.js');

// Function to display the currently playing song
function displayNowPlaying(song) {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Now Playing')
        .setDescription(`🎵 **${song.title}** requested by ${song.requestedBy}`)
        .addField('Duration', song.duration)
        .addField('Artist', song.artist)
        .addField('Album', song.album)
        .setThumbnail(song.thumbnail);

    return embed;
}

// Function to display the music queue
function displayQueue(queue) {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Music Queue')
        .setDescription('Here is the current music queue:')
        .addField('Now Playing', queue[0].title);

    if (queue.length > 1) {
        for (let i = 1; i < queue.length; i++) {
            embed.addField(`Song ${i}`, queue[i].title);
        }
    }

    return embed;
}

// Function to display the command options
function displayCommands() {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Command Options')
        .setDescription('Here are the available bot commands:')
        .addField('!play <song>', 'Play a song in the queue')
        .addField('!pause', 'Pause the currently playing song')
        .addField('!skip', 'Skip to the next song in the queue')
        .addField('!volume <level>', 'Adjust the playback volume')
        .addField('!queue', 'Display the current music queue')
        .addField('!nowplaying', 'Show information about the currently playing song');

    return embed;
}

module.exports = {
    displayNowPlaying,
    displayQueue,
    displayCommands
};