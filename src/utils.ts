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

export { config };
