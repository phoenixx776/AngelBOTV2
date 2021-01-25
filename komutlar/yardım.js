const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
 .setTitle('» AngelBOT v0.0.1 sürümüyle sizlerle.')
.setTimestamp()
.addField('» A!moderasyon', 'Moderasyon menüsünü açar')
.addField('» A!eğlence', 'Eğlence Menüsünü açar')
.setFooter('© 2021 AngelBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};