module.exports = {
  name: 'status',
  description: '',
  catagory: 'Moderation',
  execute(client, message, args) {
    client.db.set(`status`, args.join(' '))
    message.channel.send(`Updated bot status to ${args.join(' ')}`)
    client.user.setActivity(client.db.get(`status`))
  }
  
}