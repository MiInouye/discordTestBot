const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brain')
		.setDescription('Replies with dome'),
	async execute(interaction) {
		await interaction.reply('https://tenor.com/search/among-us-gifs');
	},
};