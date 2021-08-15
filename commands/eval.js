const { MessageEmbed } = require('discord.js')


module.exports = {
  name: 'eval',
  description: 'Evaluate code. Devs Only',
  usage:'eval [code]',
  aliases: ['e'],
  category: 'Core',
  execute(client, message, args) {
    const devs = ['767998856348565505','294870523438170112','832341911795925073'];
    const content = args.join(' ')
  if(devs.includes(message.author.id)) {
    const result = eval(content.replace('eval', ''))
    message.channel.send(`${result}`)
  }
    else {
     message.channel.send('Only devs can use this command');
}
  }
}