const Discord = require('discord.js');

module.exports = {
  name:'avatar',
  description:'Display a users avatar',
  execute(client,message,args) {
    const avatarbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}'s Avatar`)
    .setImage(message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#E2C581")
    message.channel.send({embeds:[avatarbed]})
    }
}
  

