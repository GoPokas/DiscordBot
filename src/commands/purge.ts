import {
	Message,
	Permissions,
	User,
	CommandInteraction,
	Collection,
	MessageEmbed
} from 'discord.js';
import { Client, Discord, Slash, SlashOption } from 'discordx';

@Discord()
export abstract class PurgeCommand {
	@Slash('purge', {
		description: 'Purge messages'
	})
	private async purge(
		@SlashOption('amount', {
			description: 'Amount of messages to purge'
		})
		amount: number,
		@SlashOption('user', {
			description: 'User to purge',
			type: 'USER',
			required: false
		})
		user: User,
		message: Message,
		_interaction: CommandInteraction,
		_client: Client
	): Promise<void | Message> {
		// TODO: Permissions
		if (
			!message.member?.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) ||
			!message.member?.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
		)
			message.reply('You do not have permission to use this command');

		if (!amount || amount < 1) return message.reply('Invalid amount');

		/* Remove "Application didn't response" */

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`Purge`)
			.setFields({
				name: 'Purge',
				value: `\`${amount}\` messages were purged`
			})
			.setTimestamp();

		if (amount >= 1)
			if (user) {
				const messages = await message.channel.messages.fetch(),
					userMessages = messages.filter(
						(msg: Message) => msg.author.id === user.id
					),
					msgsToDelete: Collection<string, Message<boolean>> = new Collection();

				for (let i = 0; i < amount; i++) {
					const msg = userMessages.first();
					if (msg) {
						msgsToDelete.set(msg.id, msg);
						userMessages.delete(msg.id);
					}
				}

				if (message.channel.type === 'GUILD_TEXT')
					try {
						await message.channel.bulkDelete(msgsToDelete);
						embed.addField('User', `${user.id}`, true);
						embed.addField(
							'Deleted',
							`\`${msgsToDelete.size}\` messages`,
							true
						);
					} catch (error) {
						return await message.reply('Error: ' + error);
					}
				else return await message.reply('Invalid Channel');
			} else {
				const fetchedMessages = await message.channel.messages.fetch({
					limit: amount + 1
				});
				if (message.channel.type === 'GUILD_TEXT')
					try {
						await message.channel.bulkDelete(fetchedMessages);
					} catch (error) {
						return await message.reply('Error: ' + error);
					}
				else return await message.reply('Invalid Channel');
			}

		await message.reply({
			embeds: [embed],
			allowedMentions: {
				repliedUser: false
			}
		});

		return;
	}
}
