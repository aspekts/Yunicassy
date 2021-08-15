const { MessageEmbed } = require("discord.js")
const db = require('quick.db')
const fetch = require('node-fetch')
module.exports = (client, message) =>  {
if(client.db.has(`captcha-${message.guild.id}`)=== false) return;
    const url = 'https://api.no-api-key.com/api/v2/captcha';
        try {
           const json = fetch(url).then(res => res.json())

                    console.log(json)
                    const msg =  message.author.send(
                        new MessageEmbed()
                            .setTitle('Please enter the captcha')
                            .setImage(json.captcha)
                            .setColor("RANDOM")
                    )
                    try {
                        const filter = (m) => {
                            if(m.author.bot) return;
                            if(m.author.id === user.id && m.content === json.captcha_text) return true;
                            else {
                                msg.channel.send("You have answered the captcha incorrectly!")
                            }
                        };
                        const response =  msg.channel.awaitMessages(filter, {
                            max : 1,
                            time : 10000,
                            errors : ['time']
                        })
                        if(response) {
                            msg.channel.send('Congrats, you have answered the captcha.')
                        }
                    } catch (error) {
                        msg.channel.send(`You have been kicked from **${member.guild.name}** for not answering the captcha correctly.`)
                        user.kick()
                        console.log(error)
                    }
              
                    } catch(error) {
                    console.log(error)
                  }
              }