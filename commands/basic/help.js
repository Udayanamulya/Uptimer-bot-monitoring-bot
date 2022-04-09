const discord = require('discord.js');

module.exports = {
  name: "help",
  run: async (client, message, args ) => {
      
      let embed = new discord.MessageEmbed()
      .setAuthor("Commands")
      .addField("> <a:yes:958151907979952159> Basic",'<a:loading:957145065900363829> `Ping`, <a:loading:957145065900363829> `Uptime`,<a:badge:957144549929680906> `Help`')
      .addField("<a:yes:958151907979952159> Monitor",'<a:yes:958151907979952159> `Monitor`,<:no:957144549698986015> `Remove`,<a:badge:957144549929680906> `Stats`')
			.setFooter('Made by UB Dev')
			.setColor("GREEN");
			message.channel.send(embed)
    }
  };