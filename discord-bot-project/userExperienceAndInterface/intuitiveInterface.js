const Discord = require('discord.js');

// Function to display the current song playing
const displayNowPlaying = (message, currentSong) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Now Playing')
        .setDescription(`🎵 **${currentSong.title}** - ${currentSong.artist}`)
        .setThumbnail(currentSong.thumbnail)
        .addField('Duration', currentSong.duration)
        .addField('Requested by', currentSong.requestedBy)
        .setTimestamp();

    message.channel.send(embed);
};

// Function to display the music queue
const displayQueue = (message, queue) => {
    if (queue.length === 0) {
        message.channel.send('The music queue is empty.');
    } else {
        const queueList = queue.map((song, index) => `${index + 1}. **${song.title}** - ${song.artist}`).join('\n');
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Music Queue')
            .setDescription(queueList)
            .setTimestamp();

        message.channel.send(embed);
    }
};

// Function to display the available commands
const displayCommands = (message, commands) => {
    const commandList = commands.map(command => `**${command.name}**: ${command.description}`).join('\n');
    const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Available Commands')
        .setDescription(commandList)
        .setTimestamp();

    message.channel.send(embed);
};

// Exporting the functions for use in other files
module.exports = { displayNowPlaying, displayQueue, displayCommands };