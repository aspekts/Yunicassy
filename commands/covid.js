const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'corona',
	category: 'Statistics',
	async execute(client, message, args)  {
		const baseUrl = 'https://corona.lmao.ninja/v2';

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`The Country ***${args[0]}*** doesnt exist...`);
		}

		const covidbed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Coronavirus Cases World Wide')
			.setColor('#F23636')
			.setThumbnail('https://cms.accuweather.com/wp-content/uploads/2020/03/CoronavirusAnimation2.gif')
			.addFields(
				{
					name: 'Total Cases:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
        {
					name: 'Total Recovered:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Total Deaths:',
					value: corona.deaths.toLocaleString(),
					inline: true,
				},
        {
					name: 'Critical Cases:',
					value: corona.critical.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Active Cases:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
        {
					name: 'Todays Deaths:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
				{
					name: 'Today Recoveries:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
			);

		return message.channel.send({embeds:[covidbed]});
	},
};