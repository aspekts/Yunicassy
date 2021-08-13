const { MessageEmbed } = require("discord.js")
module.exports = (client,messageDelete) => {
  let DeleteEmbed = new MessageEmbed()
  .setTitle("**Deleted Message**")
  .setColor("#fc3c3c")
  .setDescription(`Author: ${messageDelete.author.tag}, Channel: ${messageDelete.channel}, Message: ${messageDelete.content}`)
  .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);
  
  client.channels.cache.get("873580831803846720").send({embeds:[DeleteEmbed]});
}