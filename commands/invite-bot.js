const Discord = require('discord.js')

module.exports = {
  name: 'invite',
  aliases:['invite-bot'],
  category: 'Information',
  usage: 'invite',
  description: 'Invite the bot to your server!',
  execute(client, message, args)  {
    const invitebotbed = new Discord.MessageEmbed()
    .setTitle(`Invite Link`)
    .setDescription(`You can invite me by [clicking here](https://discord.com/api/oauth2/authorize?client_id=873591541631975435&permissions=261993005047&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D873591541631975435%26permissions%3D261993005047%26scope%3Dbot&scope=bot)`)
    .setColor("BLUE")

    message.channel.send({embeds:[invitebotbed]});
  }
}