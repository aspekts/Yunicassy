const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js")
module.exports = {
  name:'time',
  description:'Get the current time and UTC offset for a certain location.',
  aliases:[],
  usage:'time [region/area]',
  category:'Statistics',
  async execute(client,message,args) {
    let location = args.join(" ")
    if(!location)return message.reply("Please mention a valid region or area");
    try {
    const url = `https://timezoneapi.io/api/timezone/?${location}&token=${process.env.TIME}`
    const response = await fetch(url).then(res => res.json())
    const errbed = new MessageEmbed()
    .setTitle("Cannot find timezone! :alarm_clock: ")
    .setDescription(`Cannot find timezone information for area or region provided. Please try again with the correct usage.\nExamples:\n${client.prefix}time Europe/Paris\n${client.prefix}time Australia/Victoria\n${client.prefix}time America/Los_Angeles\n A list of all available time zones can be found [here.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)`)
    .setTimestamp()
    .setColor("RED")
    if(!response.data) return message.reply({embeds:[errbed]});
        const e = new MessageEmbed()
        .setTitle(`${response.data.datetime.offset_tzid} - ${response.data.datetime.offset_tzab} Info`)
        .addField(`UTC offset`,`${response.data.datetime.offset_gmt}`)
        .addField(`Timezone abbreviation`,response.data.datetime.offset_tzab)
        .addField(`Complete Timezone name`,response.data.datetime.offset_tzfull)
        .addField(`Current Date and Time`,response.data.datetime.date_time_txt)
        .setColor("RANDOM")
        .setFooter(`Good ${response.data.datetime.timeday_gen} to people in the ${response.data.datetime.offset_tzab} timezone!`)
        message.channel.send({embeds:[e]})
  }
        catch (err) {
          console.error(err)
            return message.reply('**:no_entry_sign: I think an error occured...**');
            
        }

      
  }

  
}