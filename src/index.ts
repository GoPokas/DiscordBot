const Discord = require("discord.js");
const DotEnv = require("dotenv").config();

const bottoken = process.env.TOKEN;

const CastroID = "303902144027820043";
const PeixeID = "605848360175403270";
const TalinID = "486887211837685778";
const PokasID = "247483052370952192";
const DavidID = "684806232636260414";

const prefix = ",";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

//Login check
client.on("ready", () => {
  console.log("Logged in as " + client.user.tag);
});

//Random message when pinged
client.on("messageCreate", (message) => {
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
});

//Specific messages depending on who is pinged
client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.mentions.has(CastroID)) {
    message.channel.send("Oh Castor Informático, famum bico.");
  }
  if (message.mentions.has(TalinID) || message.mentions.has(PeixeID)) {
    message.channel.send("Entra aí no meu clã.");
  }
});

//Returns response time when pinged
client.on("messageCreate", (message) => {
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
});
client.login(bottoken);
