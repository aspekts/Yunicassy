const { Permissions } = require('discord.js');
module.exports = {
  name:'kick',
  aliases:[],
  description:'Kick a user from a guild',
  category:'Moderation',
async execute(client,message,args) {
    let reason = args[1]
    if(!reason) {
    let reason = "No reason."
    }
      const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {

         await member.kick([reason])
          .then(() => {
         
            message.reply(`Successfully kicked ${user.tag}`);
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
