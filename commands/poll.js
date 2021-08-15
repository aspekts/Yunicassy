const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'poll',
  description: 'Create a poll for your server!',
  usage: 'poll [message]',
  aliases:[],
  category: 'Information',
  execute(client, message, args) {
    const question = args.join(' ');
    if(!args) return message.channel.send('please send a message for the poll!')
    const pollbed = new MessageEmbed()
    .setTitle('New Poll!')
    .setDescription(question)
    .setFooter(`From ${message.author.tag}`)
    .setColor('RANDOM')
    message.channel.send({embeds:[pollbed]}).then(messageReaction => {
      messageReaction.react('✅')
      messageReaction.react('❌')
    }).then(setTimeout(() => message.delete,5000))
}
}