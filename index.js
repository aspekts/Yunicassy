const { Collection, Client, Intents, MessageEmbed } = require("discord.js")
const ints = new Intents([
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.DIRECT_MESSAGES
])
require("dotenv").config()
const db = require('quick.db');
const config = require('./config.json')
const client = new Client({intents:ints});
const fs = require('fs')
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => console.log(`Yunicassy listening at http://localhost:${port}`));
client.db = db
client.config = config
client.ss = {}
client.commands = new Collection();
client.aliases = new Collection()
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
    props.aliases.forEach(alias => {
            client.aliases.set(alias, commandName);
    });
  });
});
client.login(process.env.TOKEN);