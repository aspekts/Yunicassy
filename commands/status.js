module.exports = {
  name: 'status',
  aliases:[],
  description: 'Set the status of the bot',
  usage: 'status [new status]',
  catagory: 'Core',
  execute(client, message, args) {
 const devs = ['767998856348565505','294870523438170112','832341911795925073'];
 if(devs.includes(message.author.id)) return message.reply("Only Yunicassy developers can use this command.")
    client.db.set(`status`, args.join(' '))
    message.channel.send(`Updated bot status to ${args.join(' ')}`)
    client.user.setActivity(client.db.get(`status`))
  }
  
}