import { importx } from '@discordx/importer';
import dotenv from 'dotenv';

enum UserIds {
	'Castro' = '303902144027820043',
	'David' = '684806232636260414',
	'Papiro' = '388810220002082841',
	'Peixe' = '605848360175403270',
	'Pokas' = '247483052370952192',
	'Talin' = '486887211837685778'
}

dotenv.config();

const config = {
	token: process.env.TOKEN || '',
	prefix: ',',
	userIDs: UserIds
};

async function readCommandsEvents(): Promise<void> {
	/* Import all comamnds */
	await importx('./src/commands/**/**.ts');

	/* Import all events */
	await importx('./src/events/**/**.ts');
}

function genRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * max) + 1;
}

export { config, readCommandsEvents, genRandomNumber };
