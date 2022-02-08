/* eslint-disable one-var */
import { ArgsOf, Client, Discord, GuardFunction, On } from 'discordx';
import { messagesRandom, messagesWithSpecificContent } from '../messages';
import { genRandomNumber } from '../utils';

@Discord()
export abstract class UserMention {
	@On('messageCreate')
	private async onMessage(
		[message]: ArgsOf<'messageCreate'>, // Type message automatically
		client: Client, // Client instance injected here,
		_guardPayload: GuardFunction
	): Promise<void> {
		if (client.user)
			if (message.content.includes(client.user.id)) {
				if (message.content.toLocaleLowerCase().includes('mario')) {
					const cont = messagesWithSpecificContent.filter(
						(fil) => fil.options?.specificContent === 'mario'
					);
					const randomNumber: number = genRandomNumber(1, cont.length) - 1;
					cont.length > 0 && message.reply(cont[randomNumber].message);
					return;
				}
				if (message.content.toLocaleLowerCase().includes('boda')) {
					const cont = messagesWithSpecificContent.filter(
						(fil) => fil.options?.specificContent === 'boda'
					);
					const randomNumber: number = genRandomNumber(1, cont.length) - 1;
					cont.length > 0 && message.reply(cont[randomNumber].message);
					return;
				}
				const randomNumber: number =
					genRandomNumber(1, messagesRandom.length) - 1;
				messagesRandom.length > 0 &&
					message.reply(messagesRandom[randomNumber].message);
			}
	}
}
