module.exports = {
  name:'slowmode',
  description:'Set the slowmode for a channel',
  category:'Moderation',
  usage: 'slowmode [number]',
  aliases:['sm'],
  async execute(client, message, args) {
		if (!args[0]) {
      return message.channel.send(`Slowmode is at: ${message.channel.rateLimitPerUser} seconds!`)
    }
        if (args[0] === 'none') {
            await message.channel.setRateLimitPerUser(0);
            return message.channel.send('Turned off slowmode :smile:');
        } else if(args[0] === 'off'){
            await message.channel.setRateLimitPerUser(0);
            return message.channel.send('Set slowmode to none!');
        }
        if (isNaN(args[0])) return message.channel.send('Time provided is not a number');
        const setTimeto = Number(args[0]);

   if(setTimeto > 21600) {
     return message.channel.send(client.errors.CustomError('The max amount of slowmode is `21600` seconds!'))
   }
		message.channel.setRateLimitPerUser(setTimeto);
		message.channel.send(`Slowmode set to ${setTimeto}s`);
	}
	
}
