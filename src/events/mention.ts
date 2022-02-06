import { Message } from 'discord.js';
import { Discord, Slash } from 'discordx';

@Discord()
abstract class PingCommand {
	@Slash('test1', {
		description: "Know bot's ping reading messages and discord API"
	})
	async ping(message: Message): Promise<void> {
		message.reply(
			`Seton a lagar: ${
				Date.now() - message.createdTimestamp
				/* FIX: API Ping */
			}ms. Que é isto sequer(API): ${Math.round(2)}ms`
		);
	}
}
