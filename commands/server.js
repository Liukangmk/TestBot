module.exports = {
	name: 'server',
	description: 'Display info about the server.',
	execute(message, args) {
		message.channel.send(`The name of the server is: ${message.guild.name} \nThe server was created at: ${message.guild.createdAt}`
        + `\nThe number of members are: ${message.guild.memberCount} \nThe server is located at: ${message.guild.region}`);
	},
};