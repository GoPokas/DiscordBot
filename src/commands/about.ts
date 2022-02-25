import { Message, MessageEmbed } from 'discord.js';
import { Discord, Slash, Client } from 'discordx';

@Discord()
export abstract class AboutCommand {
	@Slash('about', {
		description: `Gives the bot's Slash commands.`
	})
	private async About(message: Message, client: Client): Promise<Message> {
		const embed = new MessageEmbed()
			.setTitle('About the bot.')
			.setColor('#9370DB')
			.setFields({
				name: 'Commands',
				value: client.applicationCommands
					.map((cmd) => `\`${cmd.name}\` - ${cmd.description}`)
					.join('\n')
			});
		return message.reply({
			embeds: [embed],
			allowedMentions: {
				repliedUser: false
			}
		});
	}
}
