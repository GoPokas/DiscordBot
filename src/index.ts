import 'reflect-metadata';
import { Intents, Interaction, Message } from 'discord.js';
import { Client } from 'discordx';
import { dirname, importx } from '@discordx/importer';
import { config } from './utils.js';

// Create a BOT client
const client = new Client({
	/* Load Intents */
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	botGuilds: [(client: Client) => client.guilds.cache.map((guild) => guild.id)]
});

/* When bot's ready to start */
client.once('ready', async () => {
	await client.initApplicationCommands({
		guild: { log: false },
		global: { log: true }
	});
	await client.initApplicationPermissions();

	client.user?.setActivity('Clash Royale');

	/* -------------------------------------------------------------------------- */
	/*                                 Information                                */
	/* -------------------------------------------------------------------------- */

	/* -------------------------------- Bot Info -------------------------------- */
	console.log(
		`🚀 Logged in as ( ${client.user?.username}#${client.user?.discriminator} ) < ${client.user?.id} >`
	);

	/* -------------------------------- Commands -------------------------------- */
	console.log(`  > ${client.applicationCommands.length} commands loaded:`);
	client.applicationCommands.map((cmd) => console.log(`     > ${cmd.name}`));

	/* --------------------------------- Events --------------------------------- */
	console.log(`  > ${client.events.length} events loaded:`);
	client.events.map((cmd) => console.log(`     > ${cmd.event}`));
});

client.on('interactionCreate', (interaction: Interaction) => {
	if (interaction.user.bot) return;
	client.executeInteraction(interaction);
});

client.on('messageCreate', (message: Message) => {
	if (message.author.bot) return;
	client.executeCommand(message);
});

async function start(): Promise<void> {
	await importx(dirname(import.meta.url) + '/commands/**/*.{ts,js}');
	await importx(dirname(import.meta.url) + '/events/**/*.{ts,js}');

	config.token !== '' && (await client.login(config.token));
}
start();
