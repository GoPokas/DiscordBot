import { Message, ReactionCollector } from 'discord.js';

export enum snipeType {
	messageDelete = 'Deleted Message',
	messageUpdate = 'Updated Message',
	reactionDelete = 'Reaction Deleted'
}

type Snipe = {
	item: Message | Message[] | ReactionCollector | string;
	authorId: string;
	type: snipeType;
};

interface ISnipe {
	snipe: Snipe;
	date: Date;
}

class SnipeHelper {
	private snipe: ISnipe | undefined;

	constructor() {}

	/**
	 * Get the last snipe
	 */
	public getSnipe() {
		return this.snipe;
	}

	/**
	 * Set the last snipe
	 * @param snipe
	 *
	 */
	public setSnipe(props: ISnipe) {
		this.snipe = {
			snipe: props.snipe,
			date: new Date()
		};
	}
}

const lastSnipe = new SnipeHelper();

export { lastSnipe };
