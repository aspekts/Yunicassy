const Discord = require('discord.js');

module.exports = {
  name:'avatar',
  category:'Fun',
  aliases:['av'],
  description:'Display a users avatar',
  execute(client,message,args) {
    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size:1024,dynamic:true})

    const avatarbed = new Discord.MessageEmbed()
    .setAuthor(`${member}'s Avatar`)
    .setImage(avatar)
    .setColor("#E2C581")
    message.channel.send({embeds:[avatarbed]})
    }
}
  

