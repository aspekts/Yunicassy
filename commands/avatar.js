const Discord = require('discord.js');

module.exports = {
  name:'avatar',
  category:'Fun',
  aliases:['av'],
  usage:'avatar <@user>',
  description:'Display a users avatar',
  execute(client,message,args) {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size:1024,dynamic:true})

    const avatarbed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s Avatar`)
    .setImage(avatar)
    .setColor("#E2C581")
    .setTimestamp()
    message.channel.send({embeds:[avatarbed]})
    }
}
  

