module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message, args) {
		message.channel.send(`The name of the user is: ${message.author.username} \nThe ID of the user is: ${message.author.id}`);
	},
};