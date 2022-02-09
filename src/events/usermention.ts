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
		if (client.user) {
			if (message.content.includes(config.userIDs.Castro)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.Castro)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.David)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.David)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.Papiro)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.Papiro)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.Peixe)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.Peixe)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.Pokas)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.Pokas)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.Talin)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.Talin)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				msgs.length > 0 && message.reply(msgs[rdmNumber].message);
			}
		}
	}
}
