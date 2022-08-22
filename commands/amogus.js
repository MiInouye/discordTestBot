const { SlashCommandBuilder, MessagePayload } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
// const file = new AttachmentBuilder('../assets/discordjs.png');

// const exampleEmbed = {
// 	title: 'Some title',
// 	image: {
// 		url: 'attachment://discordjs.png',
// 	},
// };

// channel.send({ embeds: [exampleEmbed], files: [file] });


module.exports = {
	data: new SlashCommandBuilder()
		.setName('amogus')
		.setDescription('sussy'),
	async execute(interaction) {
        const channel = interaction.client.channels.cache.get('id');
        const attachment = new MessagePayload("https://tenor.com/search/among-us-gifs");
        interaction.reply({files:[attachment]})
        // inside a command, event listener, etc.
        // const exampleEmbed = new EmbedBuilder()
        //     .setColor(0x0099FF)
        //     .setTitle('Some title')
        //     .setURL('https://discord.js.org/')
        //     .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        //     .setDescription('Some description here')
        //     .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        //     .addFields(
        //         { name: 'Regular field title', value: 'Some value here' },
        //         { name: '\u200B', value: '\u200B' },
        //         { name: 'Inline field title', value: 'Some value here', inline: true },
        //         { name: 'Inline field title', value: 'Some value here', inline: true },
        //     )
        //     .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        //     .setImage('https://i.imgur.com/AfFp7pu.png')
        //     .setTimestamp()
        //     .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        // message.channel.send({ content: 'Hello!', embeds: [exampleEmbed] });
        // channel.send({ embeds: [exampleEmbed] });
        
	},
};



