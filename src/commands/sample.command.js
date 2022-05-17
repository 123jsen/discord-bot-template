const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sample')
        .setDescription(`A example description`)
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Use @ to mention target')
                .setRequired(true)),

    async execute(interaction) {
        await interaction.reply('Sample Command');
    },
};
