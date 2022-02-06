import { importx } from '@discordx/importer';
import dotenv from 'dotenv';

dotenv.config();

const config = {
	token: process.env.TOKEN || '',
	prefix: ',',
	userIDs: {
		CastroID: '303902144027820043',
		DavidID: '684806232636260414',
		PapiroID: '388810220002082841',
		PeixeID: '605848360175403270',
		PokasID: '247483052370952192',
		TalinID: '486887211837685778'
	}
};

async function readCommandsEvents(): Promise<void> {
	/* Import all comamnds */
	importx('./src/commands/**/**.ts');

	/* Import all events */
	importx('./src/events/**/**.ts');
}

function genRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * max) + 1;
}

export { config, readCommandsEvents, genRandomNumber };
