/* eslint-disable one-var */
import { ArgsOf, Client, Discord, GuardFunction, On } from 'discordx';
import { lastSnipe, snipeType } from './snipe.helper.js';

@Discord()
export abstract class UserMention {
	@On('messageReactionRemove')
	private async onMessage(
		[message]: ArgsOf<'messageReactionRemove'>, // Type message automatically
		client: Client, // Client instance injected here,
		_guardPayload: GuardFunction
	): Promise<void> {
		if (message.emoji)
			lastSnipe.setSnipe({
				date: new Date(),
				snipe: {
					authorId: message.emoji.client.id ? message.author.id : '',
					item: message.content ? message.content : '',
					type: snipeType.reactionDelete
				}
			});
	}
}
