import { Message } from 'discord.js';
import { Discord, SimpleCommand, Slash } from 'discordx';

@Discord()
abstract class PingCommand {
	/* FIX: API Ping */
	/* @Slash('ping', {
		description: "Know bot's ping reading messages and discord API"
	})
	private ping(message: Message) {
		console.log('ping command');
		return message.reply(
			`Seton a lagar: ${
				Date.now() - message.createdTimestamp
			}ms. Que é isto sequer(API): ${Math.round(2)}ms`
		);
	} */
	@SimpleCommand('ping', {
		prefix: ','
	})
	private ping(message: Message) {
		return message.reply('Pong');
	}
}
