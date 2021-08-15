const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

  if(!message.content.startsWith(prefix)) return;


    // the perm. that the member need it to ban someone
    if(!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR'))
    // if someone dont hv perm it will send this message
    message.channel.send("You don't have permission to use that command.");

    else {
      if (!message.guild) return;
  
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
  };
}