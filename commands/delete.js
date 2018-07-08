module.exports = {
	name: 'delete',
	description: 'Delete messages up to 99',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('you need to enter a number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to enter a value within 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to delete messages in this channel!');
		});
	},
};