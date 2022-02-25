import { Message, MessageAttachment } from 'discord.js';
import { Client, Discord, Slash } from 'discordx';

@Discord()
export abstract class SingCommand {
	@Slash('sing', {
		description: 'Replies with a pre-determined video.'
	})
	private async sing(message: Message, client: Client): Promise<Message> {
		const attachment = new MessageAttachment('./assets/dami.mp4');
		return message.reply({
			files: [attachment],
			allowedMentions: {
				repliedUser: false
			}
		});
	}
}
