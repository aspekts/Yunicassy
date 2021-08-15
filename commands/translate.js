const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js');

module.exports = {
  name:"translate",
  category:'Fun',
  aliases:[],
  usage: 'translate [language to translate to] [text]',
  description:"Translate text from any language, to any language!",
  async execute(client, message, args) {
  
  const txt = args.slice(1).join(" ")
  const language = args[0]
  if(!language) return message.reply(`${message.author}, **no language was mentioned. Please try again.**`)
  if(!txt) return message.reply(`${message.author}, **Please provide a text to translate**`)

  translate(txt, { to: language }).then(res => {
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
}
 

