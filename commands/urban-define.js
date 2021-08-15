const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "urban",
  aliases:[],
  description:'Get the urban definition for a word of your choosing!',
  category: "Information",
  usage: 'urban-define [word]',
  async execute(client, message, args){
    let search = args.join(" ");
    if(!search) return message.reply(':no_entry_sign:  Make sure to mention a word to define.');

    search = encodeURIComponent(search);

    const { 
      data: { list }
      } = await axios.get(
        `https://api.urbandictionary.com/v0/define?term=${search}`
      );

      const [ answer ] = list;

      
        const urbandefinebed = new MessageEmbed()
         .setTitle(answer.word)
         .setURL(answer.permalink)
         .setColor("#FFF200")
         .addField("Definition", trim(answer.definition))
         .addField("Example", trim(answer.example))
         .addField("Rating", `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎 `)
         .setThumbnail('https://s3.amazonaws.com/playstore/images/cec1918f784d0b72a3d3fdf6699c3388')
         .setTimestamp()
        message.channel.send({embeds:[urbandefinebed]}); 

      
       
  },
};

function trim(input) {
  return input.length > 1024 ? `${str.slice(0, 1020)} ...` : input;
}