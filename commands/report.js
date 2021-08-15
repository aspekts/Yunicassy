const Discord = require('discord.js')
module.exports = {
    name:'report',
    category:'Moderation',
    description: 'Report a nasty user',
    async execute(client, message, args) {

    let user = message.mentions.users.first()
    if (!user) return message.channel.send('Please mention a user to report!')

    let reason = args.slice(1).join(" ")
    if (!reason) return message.channel.send("please provide a reason!")

    let Avatar = user.displayAvatarURL();
    let Channel = message.guild.channels.cache.find((ch) => ch.name === "reports") 
    if (!Channel) return message.channel.send("There is no channel called reports, please contact a mod or create a channel called `reports`");

    const reportbed = new Discord.MessageEmbed()
    .setTitle('New Reported User!')
    .setDescription(`The user by the name of \`${message.author.tag}\` has reported \`${user.tag}\`!`)
    .setColor("RANDOM")
    .setThumbnail(Avatar)
    .addFields(
        { name: "Member Tag", value: `${message.author.tag}`, inline: true},
        { name: "Reported Tag", value: `${user.tag}`, inline: true},
        { name: "Reason", value: `${reason}`, inline: true}
    )
    Channel.send({embeds:[reportbed]}); 
    message.channel.send(':arrow_forward: successfully sent the report!')

}
}