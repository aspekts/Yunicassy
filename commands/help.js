const paginationEmbed = require("discordjs-button-pagination")
const { MessageEmbed,MessageButton } = require("discord.js")
module.exports = {
  name:'help',
  usage:'help <usage>',
  category:'Information',
  aliases:['h'],
  description:'Provides commands and help information',
execute(client,message,args) {
  if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Information').map((x) => '`' + x.name + '`').join(' ◦  ');
            const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(' ◦  ');
            const mod = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(' ◦  ');
            const stats = message.client.commands.filter(x => x.category == 'Statistics').map((x) => '`' + x.name + '`').join(' ◦  ');
    const embed = new MessageEmbed()
    .setTitle("Yunicassy - About")
    .setAuthor("What is Yunicassy?")
    .setDescription("Yunicassy is a discord bot made for UltraX's Clash of Codes event. Made by TCPYTAL#0001, Aspekts#4616 and Thinkright20#0001.")
    .setColor("#7AD1FF")
    .setThumbnail('https://cdn.discordapp.com/attachments/873595798661771294/875788123135684698/yunicassy.png')
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
    const embed1 = new MessageEmbed()
    .setTitle(":mag_right:  Utility Commands")
    .setDescription(infos)
    .setColor('#7AD1FF')
    const embed2 = new MessageEmbed()
    .setTitle("Fun Commands")
    .setDescription(fun)
    .setColor('RANDOM')
    const embed3 = new MessageEmbed()
    .setTitle("Moderation Commands")
    .setDescription(mod)
    .setColor('RANDOM')
    const embed4 = new MessageEmbed()
    .setTitle("Statistics Commands")
    .setDescription(stats)
    const pages = [
      embed,
      embed1,
      embed2,
      embed3,
      embed4
    ]
    paginationEmbed(message, pages, buttonList, timeout)
  }

         

}
}