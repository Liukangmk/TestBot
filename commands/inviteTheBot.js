module.exports = {
	name: 'invite',
	description: 'Invite me to your server',
	execute(message, args) {
		const inviteMessage = 'https://discordapp.com/api/oauth2/authorize?client_id=454948568000626698&permissions=0&scope=bot\nYou can now invite me to your server!';						
		if (!message.mentions.users.size) {
			message.react('😎')
				.then(() => message.react('😀'))
				.then(() => message.reply('You\'ve received a DM :smiley:'));
		} else if (message.author.id === '393093317233082370') {
			if (!message.mentions.users.size) {
				return message.reply('You need to tag a user!');
			}
			const taggedUser = message.mentions.users.first();
			taggedUser.send(inviteMessage).catch(() => {
				return message.author.send('I can\'t send direct messages due to their privacy settings!');
			});
			return message.author.send(`I've sent ${taggedUser} the link to invite me to ${taggedUser}'s server!`);
		}

		message.author.send(inviteMessage).catch(() => {
			return message.reply('I can\'t send direct messages due to your privacy settings!');
		});
	},
};