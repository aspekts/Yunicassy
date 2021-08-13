const Discord = require('discord.js');

module.exports.execute = async (client, message, args) =>  {
  const answers = [
    'Yes',
    'No',
    'Maybe',
    'Go Again', 
    'Most Likely',
    'Less Likely',
    'Image asking that, it is a most certain']
    
    let randomValue = answers[Math.floor(Math.random() * answers.length)];
    
    const ballembed = new Discord.MessageEmbed()
      .setTitle('The 8ball has spoken')
      .setColor('#36393f')
      .setDescription(`${message.author}, The 8 ball has replied with ${randomValue}.`)
      .setThumbnail('https://www.newagestore.com/wp-content/plugins/magic-answers/images/ball.png')
      .setTimestamp()
    message.channel.send({embeds:[ballembed]})
}

module.exports.help = {
  name: '8ball',
  aliases: ['8b']
}
