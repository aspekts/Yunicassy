const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js');
const prefix = ("y!")

module.exports.execute = async (client, message, args) =>  {
  if(!message.content.startsWith(prefix)) return
  
  const txt = args.slice(1).join(" ")
  const lang = args[0]
  if(!lang) return message.reply(`${message.author}, **no language was mentioned. Please try again.**`)
  if(!txt) return message.reply(`${message.author}, **Please provide a text to translate**`)

  translate(txt, { to: lang }).then(res => {
    const translatebed = new Discord.MessageEmbed()
     .setColor("#63B6FF")
     .setAuthor("Translated Result")
     .setDescription(res.text)
     .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png')
    
  message.channel.send({embeds:[translatebed]}); 
}).catch(err => {
  const translateerrorbed = new Discord.MessageEmbed()
   .setColor("#FF5959")
   .setDescription(`${message.author} **please specify an existing langauge to translate in.     :bookmark_tabs: **`)
   message.channel.send({embeds:[translateerrorbed]}) 
});

}
 

module.exports.help = {
  name: 'translate',
  aliases: []
}
