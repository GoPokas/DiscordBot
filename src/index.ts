import 'reflect-metadata';
import { Intents, Interaction, Message } from 'discord.js';
import { Client } from 'discordx';
import { config, readCommandsEvents } from './utils';

async function start(): Promise<void> {
	// Create a BOT client
	const client = new Client({
		/* Load Intents */
		intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
	});

	/* When bot's ready to start */
	client.once('ready', async () => {
		/* Making sure guilds are in cache */
		await client.guilds.fetch();

		/* Initialize Commands */
		await client.initApplicationCommands({
			guild: { log: true },
			global: { log: true }
		});

		/* Initialize Permissions */
		await client.initApplicationPermissions(true);

		/* clear all guild commands */
		await client.clearApplicationCommands(
			...client.guilds.cache.map((g) => g.id)
		);

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

	await readCommandsEvents();

	config.token !== '' && (await client.login(config.token));
}
start();
