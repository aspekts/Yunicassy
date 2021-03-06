const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    category:'Statistics',
    aliases:[],
    usage: 'weather [State/Country]',
    description: "shows the current weather in a specified location",

    async execute(client, message, args) {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send("**Please mention a location to view the weather in. :thumbsup: **");
            if(!args[0]) return message.channel.send('**Please specify a location!**')

            if(result === undefined || result.length === 0) return message.channel.send('**Invalid Location! Please enter another city!**')
             

            var current = result[0].current;
            var location = result[0].location;

            const weatherbed = new Discord.MessageEmbed()
            .setColor("#FFFE6B")
            .setTimestamp()
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('TimeZone', `UTC ${location.timezone}`, true)
            .addField('Degree Type', 'Celcius', true)
            .addField('Temperature', `${current.temperature}°`, true) 
            .addField('Wind', `${current.winddisplay}`, true)
            .addField('Feels Like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send({embeds:[weatherbed]})
        })
    }
}