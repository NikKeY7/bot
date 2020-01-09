const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    //message.channel.send('pong!');
   /* bot.uploadFile({
    	to: message.channel,
    	file: 'http://mini.s-shot.ru/1024/750/150/png/?http://l988114o.beget.tech/card.php?hp=99&maxHp=100&mana=1000&lvl=1&xp=10&maxXp=100&attack=4&mattack=12&armor=1&nick=%D0%9F%D0%B0%D0%B4%D1%88%D0%B8%D0%B9%20NikkeY'
    });*/
  profile[message.member.id].hp = profile[message.member.id].hp-1;
    let ava = message.member.user.displayAvatarURL;
    let nick = profile[message.member.id].Uname;
    let hp = profile[message.member.id].hp;
    let maxHp = profile[message.member.id].maxHp;
    let xp = profile[message.member.id].xp;
    let maxXp = profile[message.member.id].lvl*5;
    let lvl = profile[message.member.id].lvl;
    let mana = profile[message.member.id].mana;
    let attack = parseFloat(profile[message.member.id].damage).toFixed();
    let mattack = parseFloat(profile[message.member.id].damage*3).toFixed();

    let nick_to = nick.replace(/ /g,  '-9');

    let url = "http://l988114o.beget.tech/card.php?hp="+ hp +"&maxHp="+ maxHp +"&mana="+ mana +"&lvl="+ lvl +"%26xp="+ xp +"&maxXp="+ maxXp +"&attack="+attack+"&mattack="+mattack+"&armo=1&nick="+ nick_to +"&ava="+ava;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage("https://mini.s-shot.ru/950x150/PNG/2000/Z100/D5/?"+url);
    message.channel.send(embed);
    //message.channel.send(ava);
};
module.exports.help = {
    name: "рппорпропорп"
};