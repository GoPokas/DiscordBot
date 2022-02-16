/* eslint-disable one-var */
import { ArgsOf, Client, Discord, GuardFunction, On } from 'discordx';
import { lastSnipe, snipeType } from './snipe.helper.js';

@Discord()
export abstract class UserMention {
	@On('messageUpdate')
	private async onMessage(
		[message]: ArgsOf<'messageCreate'>, // Type message automatically
		client: Client, // Client instance injected here,
		_guardPayload: GuardFunction
	): Promise<void> {
		if (message.content && message.content.length < 1024)
			lastSnipe.setSnipe({
				date: new Date(),
				snipe: {
					authorId: message.author ? message.author.id : '',
					item: message.content ? message.content : '',
					type: snipeType.messageUpdate
				}
			});
	}
}
