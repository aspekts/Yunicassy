const got = require('got');
const { MessageEmbed } = require('discord.js');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports = {
    name: 'meme',
    aliases:[],
    category: "Fun",
    usage: 'meme',
    description: 'Get those spicy memes, fresh from reddit!',
    async execute(client, message, args) {
	const embed = new MessageEmbed();
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
      embed.setAuthor(`Author: u/${memeAuthor}`);
			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('#FF7400');
			embed.setImage(memeImage);
      embed.setThumbnail('https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png');
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			message.channel.send({embeds:[embed]});
		})
		.catch(console.error);
}
}