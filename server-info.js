const Discord = require("discord.js")
module.exports = {
  name:'server-info',
  description:'Display server information.',
  execute(client,message,args) {
     const serverstatsbed = new Discord.MessageEmbed()
     .setColor("#4BABFF")
     .setAuthor("Server Stats", 'https://th.bing.com/th/id/OIP.eNMwuTfSKXAQS98Au4mQYAHaHa?pid=ImgDet&rs=1')
     .addField("🚩 Total Members:", `${message.guild.memberCount}`, true)
     .addField("🤝 Partnered:", `${message.guild.partnered}`, true)
     .addField(":white_check_mark:  Verified:", `${message.guild.verified}`, true)
     .addField("💎 Total Boosts:", `${message.guild.premiumSubscriptionCount}`, true)
     .addField("🌍 Server Region:", `${message.guild.region}`, true)
     .addField("⏲ Creation", `${message.guild.createdAt}`, true)

    message.channel.send({embeds:[serverstatsbed]})

  }
}