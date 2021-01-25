const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('»AngelBOT v0.0.1 sürümüyle sizlerle.')
.setTimestamp()
.addField('» A!fbi', 'Etikletlediğiniz kişiyi fbi basar')
.addField('» A!davet', 'Botun linkini atar')
.addField('» A!oylama','Oylama yapar')
.addField('» A!yetkilerim','Neye izniniz olduğunu gösterir')
.addField('» A!sunucubilgi','Sunucu hakkına bilgi verir')
.addField('» A!steam "oyun adı"','Yazdığınız oyun hakkında bilgi verir')
.addField('» A!modyardım','Admin ve modların kullanabileceği kodları verir')
.addField('» A!kullanıcıbilgim','Kullanıcı Bilgilerinizi atar')
.addField('» A!lginçbilgi','Bilmediginiz bir sürü ilginc bilgi verir.')
.addField('» A!ağla','Botu ağlatırsın')
.addField('» A!avatar','Ppnizi atar')
.addField('» A!sorusor','Bota bir soru sorarsın')
.addField('» A!renkara','Bir renk ararsın')
.addField('» A!şanslısayım','Şanslı Sayını tahmin eder')
.setFooter('© 2021 Angel Bot', client.user.avatarURL())
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence'
};