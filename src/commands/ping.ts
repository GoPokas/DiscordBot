import { Message } from 'discord.js';
import { Discord, Slash } from 'discordx';

@Discord()
abstract class PingCommand {
	@Slash('ping', {
		description: "Know bot's ping reading messages and discord API"
	})
	private ping(message: Message) {
		console.log('ping command');
		return message.reply(
			`Seton a lagar: ${
				Date.now() - message.createdTimestamp
				/* FIX: API Ping */
			}ms. Que é isto sequer(API): ${Math.round(2)}ms`
		);
	}
}
