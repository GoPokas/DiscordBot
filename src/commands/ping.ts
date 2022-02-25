import { Message, MessageEmbed } from 'discord.js';
import { Client, Discord, Slash } from 'discordx';

@Discord()
export abstract class PingCommand {
	@Slash('ping', {
		description: 'Returns the bots and the bots API ping.'
	})
	private async ping(message: Message, client: Client): Promise<Message> {
		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.setColor('#9370DB')
			.setFields(
				{
					name: 'Bot',
					value: `\`${Date.now() - message.createdTimestamp}ms\``
				},
				{
					name: 'API',
					value: `\`${client.ws.ping}ms\``
				}
			);

		return message.reply({
			embeds: [embed],
			allowedMentions: {
				repliedUser: false
			}
		});
	}
}
