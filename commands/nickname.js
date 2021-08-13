const { Discord } = require('discord.js')

module.exports = {
    name: "nickname",
    description: "Changes a user nickname!",
    category: "Moderation",
    aliases: ['nick'],
     async execute (client, message, args){
        const userID = message.mentions.users.first().id
        const mentionedUser = await message.guild.members.cache.get(userID)

if(!mentionedUser) return message.channel.send('Please mention a user!')

if(mentionedUser.user.bot) {
  return message.channel.send(`You can't do this action to a bot!`);
}

const nick = args.slice(1).join(' ')
       if(!nick) {
         mentionedUser.setNickname(null)
         message.channel.send('User nick reset!')
         return
       }
       mentionedUser.setNickname(nick)

       message.channel.send(`Changed ${mentionedUser.user.username}'s Nickname to ${nick}`)

    }
}