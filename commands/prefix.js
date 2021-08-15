const { Permissions } = require('discord.js')
module.exports = {
  name: 'prefix',
  aliases: [],
  usage: 'prefix [New Prefix]',
  description: "Change the bot's prefix for your guild.",
  category: 'Moderation',
  async execute(client, message, args) {
    if(!member.permissions.has(Permissions.FLAGS.MANGE_MESSAGES)) {
      message.reply("You do not have permissions to change the prefix. Please contact a moderator or developer to do so.")
    }
    if((args.join('') === client.config.prefix)|| (!args[0])) {
      client.db.delete(`prefix_${message.guild.id}`)
      client.db.set(`prefix_${message.guild.id}`,"y!")
      await message.channel.send(`Prefix reset to \`y!\``)
    }
    else{ 
   client.db.set(`prefix_${message.guild.id}`, args.join(" "))
   await message.channel.send(`Updated bot prefix. The new prefix is now \`${args[0]}\``)
   }
  }
}
