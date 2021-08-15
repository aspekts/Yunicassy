

module.exports = {
    name : 'captcha',
    async execute(client, message, args) {
        if(args[0] === 'on') {
            await client.db.set(`captcha-${message.guild.id}`, true)
            message.channel.send('Turned on captcha feature')
        } else if(args[0] === 'off') {
            await client.db.delete(`captcha-${message.guild.id}`)
            message.channel.send('Turned off captcha feature')
        }
    }
}