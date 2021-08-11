const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
const translate = require('@iamtraction/google-translate');
const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(files => file.endsWith('.js'))
for(const file of commandFiles)

client.on("ready", () => {

    console.log("Bot Operational")
    client.user.setActivity("The Clash Of Codes")
})

console.log('im here')
client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('y!kick')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
         
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {

            message.reply('I was unable to kick the member');

            console.error(err);
          });
      } else {

        message.reply("That user isn't in this guild!");
      }

    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.on('message', message => {

  if (message.content === 'y!avatar') {
    const avatarbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}'s Avatar`)
    .setImage(message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#E2C581")
    message.channel.send(avatarbed)
    
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'y!ping') {  
    const pingbed = new Discord.MessageEmbed()
      .setColor("#CACAC9")
      .setAuthor("Ping Result", 'https://th.bing.com/th/id/R6c90541f8eb5cdee70f3f1b4fb10f4a9?rik=qu1yAo95rqMvuw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2fx6b%2facqx6bKKi.png&ehk=mhVNV9hQARPvzM1uJJnA3Hv4YFZxVsickuNRQgV4%2fcc%3d&risl=&pid=ImgRaw')
      .setDescription(`**Latency is ${Date.now() - message.createdTimestamp}ms. The API Latency is ${Math.round(client.ws.ping)}ms.**`)
      .setTimestamp()

    message.channel.send(pingbed)
    
  }
});



client.on('message', message => {
  if (message.content.toLowerCase() === 'y!server stats') {
    const serverstatsbed = new Discord.MessageEmbed()
     .setColor("#4BABFF")
     .setAuthor("Server Stats", 'https://th.bing.com/th/id/OIP.eNMwuTfSKXAQS98Au4mQYAHaHa?pid=ImgDet&rs=1')
     .addField("🚩 Total Members:", `${message.guild.memberCount}`, true)
     .addField("🤝 Partnered:", `${message.guild.partnered}`, true)
     .addField(":white_check_mark:  Verified:", `${message.guild.verified}`, true)
     .addField("💎 Total Boosts:", `${message.guild.premiumSubscriptionCount}`, true)
     .addField("🌍 Server Region:", `${message.guild.region}`, true)
     .addField("⏲ Creation", `${message.guild.createdAt}`, true)

    message.channel.send(serverstatsbed)
    
  }
});


client.login('ODczNTkxNTQxNjMxOTc1NDM1.YQ6phg.wtAhom8p5bES-TE4YvfsW8ncqb0');
