import { Message, MessageEmbed } from 'discord.js';
import { Client, Discord, Slash } from 'discordx';
import { lastSnipe } from '../events/snipe/snipe.helper.js';

@Discord()
export abstract class SnipeCommand {
	@Slash('snipe', {
		description: 'Pong!'
	})
	private async snipe(message: Message, client: Client): Promise<Message> {
		const embed = new MessageEmbed();
		const lastSnipeData = lastSnipe.getSnipe();
		if (lastSnipeData) {
			embed
				.setTitle('GET SNIPPED!')
				.setColor('#9370DB')
				.setFields(
					{
						name: `${lastSnipeData.snipe.type}`,
						value: `${lastSnipeData.snipe.item.toString()}`
					},
					{
						name: `User: `,
						value: `<@${lastSnipeData.snipe.authorId}>`,
						inline: true
					},
					{
						name: `Date: `,
						value: `
                        ${lastSnipeData.date?.getDate()}/${lastSnipeData.date?.getMonth()}/${lastSnipeData.date?.getFullYear()} \n ${lastSnipeData.date?.getHours()}:${lastSnipeData.date?.getMinutes()}:${lastSnipeData.date?.getSeconds()}
                        `,
						inline: true
					}
				);
		} else {
			embed.setFields({
				name: 'No Snipe',
				value: 'No Snipe'
			});
		}
		return message.reply({
			embeds: [embed],
			allowedMentions: {
				repliedUser: false
			}
		});
	}
}
