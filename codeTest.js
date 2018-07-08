//nvm forget this

for (const a of client.commands) {
	if(!client.commands.prefix) {
		client.commands.execute(message, args);
	}
}
