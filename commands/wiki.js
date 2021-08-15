const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch') 

module.exports = {
    name: "wiki",
    category:'Information' ,
    aliases:[],
    usage: 'wiki [text]',
    description: 'Search Any Thing On Wikipedia.',
  async execute(client, message, args) {

        const wiki = args.join(' ')
        if(!wiki) return message.reply('**:mag_right:  Provide a Wiki page to Search.**') 
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` 

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }      
        catch (e) {
            return message.reply('**An Error Occured, Try Again.**')
        }

        try {
            if(response.type === 'disambiguation') { 
                const wikimorebed = new MessageEmbed()
                .setColor('GREY')
                .setTitle(response.title)
                .setTimestamp()
                .setURL(response.content_urls.desktop.page)
                .setDescription([`
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`]) 
                message.channel.send({embeds:[wikimorebed]})
            }
            else {
                const wikibed = new MessageEmbed()
                .setColor('GREY')
                .setTitle(response.title)
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page)
                .setDescription(response.extract)
                message.channel.send({embeds:[wikibed]})
                .setTimestamp()
            }
        }
        catch {
            return message.reply('**:mag_right: Make sure to provide a valid Wiki page name to search.**') 
        }
    }
}