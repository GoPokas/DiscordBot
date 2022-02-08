import { config } from './utils';

type MessagesType = Array<{
	message: string;
	options?: {
		specificContent?: string;
		user?: Array<{
			id: string;
		}>;
	};
}>;

export const messagesRandom: MessagesType = [
	{
		message: 'Dá-me magos elétricos.'
	},
	{
		message: 'Famum bico.'
	},
	{
		message: '*Começa a tremer que nem um maluco*'
	},
	{
		message: 'Ouuuu queres que te foda?'
	}
];

export const messagesWithSpecificContent: MessagesType = [
	{
		message: 'É quem comeu a tua mãe atrás do armário',
		options: {
			specificContent: 'mario'
		}
	},
	{
		message: 'É o caralho que te foda.',
		options: {
			specificContent: 'boda'
		}
	}
];

export const messagesWithUser = [
	{
		message: 'Oh Castor Informático, famum bico.',
		options: {
			user: [
				{
					id: config.userIDs.CastroID
				}
			]
		}
	},
	{
		message: 'Entra aí no meu clã.',
		options: {
			user: [
				{
					id: config.userIDs.PeixeID
				},
				{
					id: config.userIDs.TalinID
				}
			]
		}
	}
];
