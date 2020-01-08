const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    /*
     	//let roleAu = message.author.roles.get('344848334969765893');
    if(!message.member.roles.get('663319647214370817')) return message.channel.send("У вас нет прав");
    //if(!bot.rUser.roles.get('663319647214370817')) return message.channel.send("Вы не можете мешать смертному!");
    let rUser = bot.rUser;

    if(!args[0]) return bot.send("Вы не указали пользователя с которым хотите биться!");
    if(!rUser) return bot.send("Пользователь не найден");
    
    
    /*message.guild.member(rUser).ban("Бан");
    let r = Math.random(0,1);

    if(r==0) return message.channel.send(args[0].user + " Успешно отбил вашу отаку!");
   	//let aid = rUser.id;
    //let rid = message.author.id;
    if(rUser.id==message.member.id) return message.channel.send("Мазохист!");
    profile[rUser.id].hp = profile[rUser.id].hp - profile[message.member.id].damage;
    profile[message.member.id].xp = profile[message.member.id].xp + profile[message.member.id].damage/2;
    //message.channel.send(rUser.user + " Было нанесено " + profile[rid].damage + " урона!");
    //message.channel.send(message.member.user + " Получил " + profile[rid].xp + " Опыта!");

    let emmed = new Discord.RichEmbed()
    .setDescription("Аттака")
    .setColor('#e22216')
    .addField(rUser.displayName,"Получил урона " + profile[message.member.id].damage)
    .addField(message.member.displayName," Получил опыта " + profile[message.member.id].damage/2);

    message.channel.send(emmed);*/
    let toBan = message.mentions.users.first().id;
    message.channel.send(toBan);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "test"
};