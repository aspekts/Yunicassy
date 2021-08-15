module.exports = {
  name: 'prefix',
  description: '',
  catagory: 'Moderation',
  async execute(client, message, args) {
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
