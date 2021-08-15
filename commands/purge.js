const { Permissions } = require("discord.js")

module.exports = {
    aliases: ['del', 'purge'], 
    category: 'Moderation',
    usage: 'purge [Amount of messages]',
    description: 'Deletes Message', 
    async execute(client, message, args) {
       if(!member.permissions.has(Permissions.FLAGS.MANGE_MESSAGES)) {
      message.reply("You do not have permissions to change the prefix. Please contact a moderator or developer to do so.")
    }
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.channel.send('Please Enter A Number.');
        } else if (amount <= 1 || amount > 100) {
            return message.channel.send('You Can Only Delete Messages From 1 To 99.');
        }

        message.channel.bulkDelete(amount ,true)
        message.channel.send(`**:white_check_mark: Successfully purged ${amount - 1} messages.**`).catch(err => {
            console.error(err);
            message.channel.send('**There was an error deleteing messages in this channel. Please check my permissions.**')
        })
    }
}