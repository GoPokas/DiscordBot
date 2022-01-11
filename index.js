const Discord = require("discord.js");
require("dotenv").config();

const bottoken = process.env.token;

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log("Logged in as " + client.user.tag);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.mentions.has(client.user.id)) {
    //Choose a random number between 1 and 3
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      message.reply("Dá-me magos elétricos.");
    } else if (random === 2) {
      message.reply("Famum bico.");
    } else if (random === 3) {
      message.reply("*Começa a tremer que nem um maluco*");
    }
  } else if (message.content == "<@!303902144027820043>") {
    message.channel.send("Oh Castor Informático, famum bico.");
  }
});

client.login(bottoken);
