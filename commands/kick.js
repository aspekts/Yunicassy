
module.exports = {
  name: 'kick',
  aliases:[],
  description: 'Kick a user from a guild',
  usage:'kick [@user]',
  category: 'Moderation',
  async execute(client, message, args) {
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

          // kick code 
            .kick({
                // the reason
              reason: 'They were bad!',
            })
            .then(() => {
            // it will send this message once the person is kicked
              message.reply(`Successfully kicked`);
            })
       
            .catch(err => {
         
              message.reply('I was unable to kick the member');
  
              console.error(err);
            });
        } else {
       
          message.reply("That user isn't in this guild!");
        }
      } else {
       
        message.reply("You didn't mention the user to kick!");
      }
  }
}