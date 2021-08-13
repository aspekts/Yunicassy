const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js")
module.exports = {
  name:'time',
  description:'Get the current time and UTC offset for a certain location',
  aliases:[],
  category:'Statistics',
  async execute(client,message,args) {
    let location = args.join(" ")
    if(!location) message.reply("Please mention a valid location or timezone")
    try {
    const url = "http://worldtimeapi.org/api/timezone/" + location
    const response = await fetch(url).then(res => res.json()) 
            const e = new MessageEmbed()
        .setTitle(`${response.timezone} - ${response.abbreviation} Info`)
        .setDescription(`UTC offset = ${response.utc_offset}`)
        message.channel.send({embeds:[e]})
  }
        catch (err) {
          console.error(err)
            return message.reply('**:no_entry_sign: I think an error occured...**');
            
        }

      
  }

  
}