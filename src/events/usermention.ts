import { Message } from 'discord.js';
import { Client, Discord, On } from 'discordx';

@Discord()
abstract class UserMention {
	@On('messageCreate')
	private onMessage(Message: Message, Client: Client) {
		console.log('messageCreate');
		if (Message.content.includes(`<@${Client.user?.id}>`)) {
			Message.reply('Teste');
		}
		return Message.reply('teste');
	}
}
