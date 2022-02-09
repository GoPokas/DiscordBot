import { Message } from 'discord.js';
import { Client, Discord, Slash } from 'discordx';

@Discord()
export abstract class PingCommand {
	@Slash('ping', {
		description: 'Pong! :ping_pong:'
	})
	private async ping(message: Message, client: Client): Promise<Message> {
		return message.reply(
			`Tou a lagar: ${
				/* FIX: Tou a lagar XXXXX ms ... */
				Date.now() - message.createdTimestamp
			}ms. Que é isto sequer(API): ${client.ws.ping}ms`
		);
	}
}
