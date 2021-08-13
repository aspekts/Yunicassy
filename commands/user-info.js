const { MessageEmbed } = require('discord.js'); 

module.exports = {
  name: 'user-info',
  description: 'Test',
  catagory: 'Statistics',
  async execute(client, message, args) {
    
    let mentionedMember = message.mentions.members.first() || message.member; // wehnever i type mentioned member that mean message.mentions.members.first() || message.member

    
    var game = mentionedMember.presence.game // whenever i type game, it makes ref. to the game the person is playing

    
    var status = mentionedMember.presence.status; // whenever i type status, it makes ref. to the user's status
    
    // organising the code so it don't look bad
    if(status == 'dnd') status = "Do Not Disturb" // if the person is dnd  so it will type in the embed Do no Distrub
    if(status == 'online') status = "Online"
    if(status == 'offline') status = "Offline"
    if(status === 'idle') status = "Idle"

    
    const roles = mentionedMember.roles.cache // getting the roles of the person
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);

    let displayRoles;

    // if he have less then 20 role, display it
    if(roles.length < 20) {
        displayRoles = roles.join(' ')
        if(roles.length < 1) displayRoles = "None" // if no roles say None

    } else {

        // if he have more then 20 just display 20 roles
        displayRoles = roles.slice(20).join(' ')
    }

    
    const userEmbed = new MessageEmbed() 
     .setColor("#C3A590")
     .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
     .setAuthor(`User information of ${mentionedMember.user.username}`, mentionedMember.user.displayAvatarURL({dynamic: true, size: 2048})) 
     .addField(`**Tag: **`, `${mentionedMember.user.tag}`) 
     .addField(`**Username: **`, `${mentionedMember.user.username|| "None"}`) 
     .addField(`**ID: **`, `${mentionedMember.id}`) 
     .addField(`**Status: **`, `${status}`) 
     .addField(`**Game: **`, `${game || 'None'}`) 
     .addField(`**Account Created At: **`, `${moment(mentionedMember.createdAt).format("DD-MM-YYYY [at] HH:mm")}`) 
     .addField(`**Joined The Server At: **`, `${mentionedMember.joinedAt}`) 
     .addField(`**Roles: [${roles.length}]**`, `${displayRoles}`) 
    message.channel.send({embeds:[userEmbed]}) 
    
  }
}