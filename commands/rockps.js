const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'rockps',
  description: 'Rock paper scissors',
  category: 'Fun',
  async execute(client,message,args) {
    const user = message.author
    const filter = m => (m.content.includes('accept') && m.author.id != client.user.id);
    const collector = message.channel.createMessageCollector({filter,  time: 120000 });
    const component = message.mentions.users.first()
    
    if(!component) return message.channel.send("Please mention a user")
    
    message.channel.send(`${component}, ${user} has asked you to play a match of rps! do you accept? type accept if you accept`)
    
     collector.on('collect', message => {
       message.channel.send('Check your dms')
	   user.send('What do you pick? Rock Paper Or Scissors')
	   component.send('What do you pick? Rock Paper Or Scissors');
     });
     collector.on('end',  message => {
       console.log('ends')
    const filter2 = message =>(user.content.toLowerCase().includes('rock'));
    const dm = message.channel.createMessageCollector({filter2,  time: 120000 });
	   dm.on('collect', message => {
	     message.channel.send('Test');
	   });
    })
  }
}