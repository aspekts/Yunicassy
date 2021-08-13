const paginationEmbed = require("discordjs-button-pagination")
const { MessageEmbed,MessageButton } = require("discord.js")
module.exports = {
  name:'help',
  description:'Provides commands and help information',
execute(client,message,args) {
    const embed1 = new MessageEmbed()
    .setTitle("Yunicassy - Commands")
    .setAuthor("")
    .setDescription("Yunicassy is a discord bot made for UltraX's Clash of Codes event. It features the team of:\n**TCPYTAL#0001**\n**Aspekts#4616**\n**Thinkright20#0001**\nand\n**PS4 | vVerniro.#8381**")
    let timeout = 10000 
    const button1 = new MessageButton()
    .setCustomId('previousbtn')
    .setLabel('Previous')
    .setStyle('DANGER');

    const button2 = new MessageButton()
    .setCustomId('nextbtn')
    .setLabel('Next')
    .setStyle('SUCCESS');
    buttonList = [
        button1,
        button2
    ]
    const embed = new MessageEmbed()
    .setAuthor("information Commands")
    .setDescription("Information commands.\nping, server-info, about, help (this command)")
    .setColor('RANDOM')
    const embed2 = new MessageEmbed()
    .setAuthor("Fun Commands")
    .setDescription("The fun commands are.\n**8ball, translate, avatar, weather** and much more coming!")
    .setColor('RANDOM')
    const embed3 = new MessageEmbed()
    .setAuthor("Moderation Commands")
    .setDescription('The moderation commands are \n**Lockdown, slowmode, kick, ban, mute, unmute, moderate, nickname**')
    .setColor('RANDOM')
    const pages = [
      embed1,
      embed,
      embed2,
      embed3
    ]
paginationEmbed(message, pages, buttonList, timeout)
}

}