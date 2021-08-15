const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'feedback',
  description: 'Give your feedback on the bot',
  aliases:[],
  usage:'feedback [/10 rating] <message>',
  category: 'Statistics',
  execute(client, message, args) {
    if(!args) return message.channel.send('Please send a feedback message with your rating out of 10')
    const fredback = args.join(' ') //fred
    const fredsbed = new MessageEmbed()
    .setTitle(`Feedback Recieved From ${message.author.tag}`)
    .setDescription(`Message: ${fredback}`)
    .setFooter('Feedback')
    .setColor('RANDOM')
    message.channel.send('Feedback sent!')
    client.guilds.cache.get('873580830964981770').channels.cache.get('875243821942849536').send({embeds:[fredsbed]})
    client.guilds.cache.get('873580830964981770').channels.cache.get('875243821942849536').send('<@&874998173641347133>')
  }
}