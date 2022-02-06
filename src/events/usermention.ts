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
			if (message.content.includes(config.userIDs.CastroID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.CastroID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.DavidID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.DavidID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.PapiroID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.PapiroID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.PeixeID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.PeixeID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.PokasID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.PokasID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
			if (message.content.includes(config.userIDs.TalinID)) {
				const msgs = messagesWithUser.filter((fil) =>
					fil.options.user.find((user) => user.id === config.userIDs.TalinID)
				);
				const rdmNumber = genRandomNumber(1, msgs.length) - 1;
				message.reply(msgs[rdmNumber].message);
			}
		}
	}
}
