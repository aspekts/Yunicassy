	const got = require("got")
  const Discord = require('discord.js');
  module.exports ={
    name:'meme',
    aliases:[],
    catagory: "Fun",
    description:'Send some memes!',
  async execute(client, message, args) {
  
  got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
      const memeAuthor = post.data.author;
			const memeNumComments = post.data.num_comments;
      const memebed = new Discord.MessageEmbed()
      embed.setAuthor(`Author: u/${memeAuthor}`);
			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			message.channel.send({embeds:[memebed]});
		})
		.catch(console.error);

  }
}