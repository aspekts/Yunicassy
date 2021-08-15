const Discord = require("discord.js")
module.exports = {
  name:'server-info',
  aliases:['serverinfo','server'],
  category:'Information',
  description:'Display server information.',
  usage: 'server-info',
  execute(client,message,args) {
     const serverstatsbed = new Discord.MessageEmbed()
     .setColor("#4BABFF")
     .setAuthor("Server Stats", 'https://th.bing.com/th/id/OIP.eNMwuTfSKXAQS98Au4mQYAHaHa?pid=ImgDet&rs=1')
     .addField("🚩 Total Members:", `${message.guild.memberCount}`, true)
     .addField("Partnered:", `${message.guild.partnered}`, true)
     .addField("<a:emoji_3:876401542503211039>: verified?:", `${message.guild.verified}`, true)
     .addField("💎 Total Boosts:", `${message.guild.premiumSubscriptionCount}`, true)
     .addField("🌍 Server Region:", `${message.guild.region}`, true)
     .addField("⏲Server Creation", `${message.guild.createdAt}`, true)

    message.channel.send({embeds:[serverstatsbed]})

  }
}