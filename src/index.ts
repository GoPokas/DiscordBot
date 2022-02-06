import path from 'path';
import { Intents, Interaction, Message } from 'discord.js';
import { Client } from 'discordx';
import { config } from './utils';
import { importx } from '@discordx/importer';

/* Function to Start the BOT */
async function start() {
	// Create a BOT client
	const client = new Client({
		/* Load Intents */
		intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
	});

	/* When bot's ready to start */
	client.once('ready', async () => {
		// make sure all guilds are in cache
		await client.guilds.fetch();

		/* Clear Application Cache */
		await client.clearApplicationCommands();

		/* Import all comamnds */
		await importx('./src/commands/**/**.ts');

		/* Import all events */
		await importx('./src/events/**/**.ts');

		/* Initialize Commands & Permissions */
		await client.initApplicationCommands();
		await client.initApplicationPermissions();

		/* -------------------------------------------------------------------------- */
		/*                                 Information                                */
		/* -------------------------------------------------------------------------- */

		/* -------------------------------- Bot Info -------------------------------- */
		console.log(
			`🚀 Logged in as ( ${client.user?.username}#${client.user?.discriminator} ) < ${client.user?.id} >`
		);

		/* -------------------------------- Commands -------------------------------- */
		console.log(`  > ${client.applicationCommands.length} commands loaded.`);
		client.applicationCommands.map((cmd) => console.log(`     > ${cmd.name}`));

		/* --------------------------------- Events --------------------------------- */
		console.log(`  > ${client.events.length} events loaded.`);
		client.events.map((cmd) => console.log(`     > ${cmd.event}`));
	});

	client.on('interactionCreate', (interaction: Interaction) => {
		client.executeInteraction(interaction);
	});

	client.on('messageCreate', (message: Message) => {
		client.executeCommand(message);
	});

	config.token !== '' && (await client.login(config.token));
}
/* Start the BOT */
start();

//Random message when pinged
/* client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.mentions.has(client.user.id) && message.content.includes("")) {
    //Choose a random number between 1 and 3
    const random = Math.floor(Math.random() * 3) + 1;
    let msg = message.content;
    message.content = msg.toLowerCase();
    if (message.content.includes("mario")) {
      message.channel.send("É quem comeu a tua mãe atrás do armário");
    } else if (random === 1) {
      message.reply("Dá-me magos elétricos.");
    } else if (random === 2) {
      message.reply("Famum bico.");
    } else if (random === 3) {
      message.reply("*Começa a tremer que nem um maluco*");
    }
  }
}); */

//Specific messages depending on who is pinged
/* client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.mentions.has(CastroID)) {
    message.channel.send("Oh Castor Informático, famum bico.");
  }
  if (message.mentions.has(TalinID) || message.mentions.has(PeixeID)) {
    message.channel.send("Entra aí no meu clã.");
  }
}); */

//Returns response time when pinged
/* client.on("messageCreate", (message) => {
  if (
    message.content.includes === "ping" ||
    message.content.startsWith(prefix)
  ) {
    message.channel.send(
      `Estou a lagar: ${
        Date.now() - message.createdTimestamp
      }ms. Que é isto sequer(API): ${Math.round(client.ws.ping)}ms`
    );
  }
}); */
