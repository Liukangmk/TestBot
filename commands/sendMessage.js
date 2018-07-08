module.exports = {
	name: 's',
	description: 'Make the bot send a message.',
	execute(message, args) {
		if (message.author.id !== '393093317233082370') {
			return;
		} else {
			let messageString = '';
			message.delete();
			for (const word in args) {
				messageString += args[word] + ' ';
			}
			if (messageString === '') {
				return;
			}
			message.channel.send(messageString);
		}
	},
};