/* eslint-disable one-var */
import { ArgsOf, Client, Discord, GuardFunction, On } from 'discordx';
import { config, genRandomNumber } from '../utils';
import { messagesWithUser } from '../messages';

@Discord()
export abstract class UserMention {
	@On('messageCreate')
	private async onMessage(
		[message]: ArgsOf<'messageCreate'>, // Type message automatically
		client: Client, // Client instance injected here,
		_guardPayload: GuardFunction
	): Promise<void> {
		if (client.user)
			if (message.mentions) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options?.user.find((user) => message.mentions.has(user.id))
				);

				const randomNumber: number = genRandomNumber(1, msgs.length) - 1;

				msgs.length > 0 &&
					message.reply({
						content: msgs[randomNumber].message,
						allowedMentions: {
							repliedUser: false
						}
					});
			}
	}
}
