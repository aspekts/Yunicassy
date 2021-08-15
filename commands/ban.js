const { MessageEmbed,Permissions } = require('discord.js');

module.exports = {
    name: 'ban', 
    description: 'Bans A User.', 
    catagory: 'Moderation',
    usage: 'ban @User', 

    async execute(client, message, args)  {

      if (!message.member.permissions.has([Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS])) {
        message.reply("You do not have permissions to run this action!")
      }
      if (permissions.has([Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS])) {
                message.reply("I do not have permissions to run this action!")
      }
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('**:no_entry_sign: Make sure to mention a member you want to ban.**');
        if(member.id == client.user.id) return message.reply("I can't ban myself!");
        member.ban();

        const banbed = new MessageEmbed()
        .setThumbnail('https://emoji.discord.st/emojis/a7fdeedd-c6dc-4a3a-80cf-a841312023fe.png')
        .setTitle('User Banned')
        .setDescription(`${member} Has Been Banned By ${message.author}`)
        .setColor('#FF7A7A')
        .setTimestamp()
        message.channel.send({embeds:[banbed]});
    }
}