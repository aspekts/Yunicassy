const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")


module.exports = {
  name: 'bot-info',
  catagory: 'Statistics',
  description: 'bot info',
  async execute(client, message, args) { 
    var botEmbed = new MessageEmbed() 
    .setColor(`#8BA7FF`) 
    .setTitle(`Bot's Info`) 
    .setThumbnail(client.user.displayAvatarURL()) 
    .setDescription(`
      **Servers:** ${client.guilds.cache.size} 
        **Channels:** ${client.channels.cache.size} 
        **Users:** ${client.users.cache.size} 
        **Discord.js Version:** ${Discord.version}
        **Node.js Version:** ${process.version}
        **General Information**
         **Username:** ${client.user.username}
         **Tag:** ${client.user.tag}
         **ID:** ${client.user.id}
         **Created At:** ${client.user.createdAt}
         **Owners:** TCPYTAL, Aspekts and Thinkright20`)
    message.channel.send({embeds:[botEmbed]}) 
}
}