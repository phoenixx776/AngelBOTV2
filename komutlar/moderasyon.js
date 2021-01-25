const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» AngelBOT v0.0.1 sürümüyle sizlerle.')
.setTimestamp()
.addField('» A!sil"siliceğiniz miktar"', 'Yazdığınız miktarda mesaj siler')
.addField('» A!rolver"vericeğiniz kişi ve rol"', 'Rol verir')
.addField('» A!slow-mode [1/10]','Chati yavaş moda alır')
.addField('» A!kilitle','Olduğun kanalda mesaj yazmayı yasaklar')
.addField('» A!kanalkilitaç','Kilitlediğin kanalın kilidini açar')
.setFooter('© 2021 AngelBot', client.user.avatarURL())
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};