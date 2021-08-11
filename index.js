require("dotenv").config()
const paginationEmbed = require('discordjs-button-pagination');
const { MessageEmbed , MessageButton, Client, Intents} = require('discord.js');
const fs = require("fs")
const ints = new Intents([
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.DIRECT_MESSAGES
])
const client = new Client({ intents: ints  })
client.on("messageCreate", async message => {
if(message.content.toLowerCase().startsWith("y!help")) {
const embed1 = new MessageEmbed()
                .setTitle('First Page')
                .setDescription('This is the first page');

const embed2 = new MessageEmbed()
                .setTitle('Second Page')
                .setDescription('This is the second page');

const button1 = new MessageButton()
                .setCustomId('previousbtn')
                .setLabel('Previous')
                .setStyle('DANGER');

const button2 = new MessageButton()
                .setCustomId('nextbtn')
                .setLabel('Next')
                .setStyle('SUCCESS');

pages = [
	embed1,
	embed2,

];


buttonList = [
    button1,
    button2
]
let timeout = 120000


paginationEmbed(message, pages, buttonList, timeout);
}
})
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login(process.env.TOKEN)