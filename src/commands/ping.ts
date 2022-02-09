import { Message, MessageEmbed } from 'discord.js';
import { Client, Discord, Slash } from 'discordx';

@Discord()
export abstract class PingCommand {
	@Slash('ping', {
		description: 'Pong!'
	})
	private async ping(message: Message, client: Client): Promise<Message> {
		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.setColor('#0099ff')
			.setFields(
				{
					name: 'Bot',
					value: `\`${Date.now() - message.createdTimestamp}ms\``
				},
				{
					name: 'API',
					value: `\`${client.ws.ping}ms\``
				}
			)
			// .setFooter({ text: `Requested by ${message.author.id}` });

		return message.reply({ embeds: [embed] });

		// return message.reply(
		// 	`Tou a lagar: ${
		// 		/* FIX: Tou a lagar XXXXX ms ... */
		// 		Date.now() - message.createdTimestamp
		// 	}ms. Que é isto sequer(API): ${client.ws.ping}ms`
		// );
	}
}
