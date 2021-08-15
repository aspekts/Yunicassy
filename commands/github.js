const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch') 

module.exports = {
    name:'github',
    aliases: ['gh'],
    usage:'github [user]',
    category:'Information',
    description: 'Shows Info About Serched User',

     async execute(client, message, args) {

        const name = args.join(' ')
        if(!name) return message.reply('**:point_right: Provide A Valid User To Search.**') 
        const url = `https://api.github.com/users/${name}` 

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('**:no_entry_sign: I think something went wrong... try agiain.**')
        }

        const githubbed = new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(`${response.login}`, 'https://htxt.co.za/wp-content/uploads/2018/11/github-logo.jpg')
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'No Bio') 
        .addField('Public Repositories:', response.public_repos.toLocaleString()) 
        .addField('Number of Followers:', response.followers.toLocaleString()) 
        .addField('People Following:', response.following.toLocaleString()) 
        .addField('Email:', response.email ? response.email : 'No Email') 
        .addField('Company:', response.company ? response.commands : 'No Company') 
        .addField('User Location:', response.location ? response.location : 'No Location') 
        message.channel.send({embeds:[githubbed]});
    }
}