const Discord = require('discord.js')
module.exports = {
    name:'report',
    category:'Moderation',
    aliases:[],
    description: 'Report a nasty user',
    usage: 'report [user] [reason]',
    async execute(client, message, args) {

    let user = message.mentions.users.first()
    if (!user) return message.channel.send('**:arrow_forward: Make sure you mention a user you want to report!**')

    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send("**:arrow_forward: You must provide a reason for the report after the mention.**")

    let Avatar = user.displayAvatarURL();
    let Channel = message.guild.channels.cache.find((ch) => ch.name === "user-reports") 
    if (!Channel) return message.channel.send("**:arrow_forward: There is no channel of name `user-reports`. Please reach out to a moderator to create the channel. :thumbsup: **");

    const reportbed = new Discord.MessageEmbed()
    .setTitle('New Reported User!')
    .setDescription(`The user by the name of ${message.author} has reported ${user.tag}!`)
    .setColor("RED")
    .setThumbnail(Avatar)
    .addFields(
        { name: "Submitter Tag", value: `${message.author.tag}`, inline: true},
        { name: "Reported User", value: `${user.tag}`, inline: true},
        { name: "Report Reason", value: `${reason}`, inline: true}
    )
    Channel.send({embeds:[reportbed]}); 
    message.channel.send(':white_check_mark: **I have sent the report!**')

}
}