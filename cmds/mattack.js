const Discord = module.require("discord.js");
//const Math = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
     
    /*	//let roleAu = message.author.roles.get('344848334969765893');
    if(!message.member.roles.get('663319647214370817')) return message.channel.send("У вас нет прав");
    //if(!bot.rUser.roles.get('663319647214370817')) return message.channel.send("Вы не можете мешать смертному!");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали пользователя с которым хотите биться!");
    if(!rUser) return bot.send("Пользователь не найден");
    
    
    /*message.guild.member(rUser).ban("Бан");
    let r = Math.random(0,1);

    if(r==0) return message.channel.send(args[0].user + " Успешно отбил вашу отаку!");
   	let aid = rUser.id;
    let rid = message.member.id;
    profile[aid].hp = profile[aid].hp - profile[rid].damage;
    profile[rid].xp = profile[rid].xp + profile[rid].damage/2;
    //message.channel.send(rUser.user + " Было нанесено " + profile[rid].damage + " урона!");
    //message.channel.send(message.member.user + " Получил " + profile[rid].xp + " Опыта!");

    let emmed = new Discord.RichEmbed()
    .setDescription("Аттака")
    .setColor('#2008e3')
    .addField(rUser.displayName,"Получил урона " + profile[rid].damage)
    .addField(message.member.displayName," Получил опыта " + profile[rid].damage/2);

    message.channel.send(emmed);
    */
        let rUser = message.mentions.users.first();
        if(!message.member.roles.get('663319647214370817')) return  bot.send("У вас нет прав");
        //if(!rUser.roles.get('663319647214370817')) return bot.send("Вы не можете мешать смертному!");
        if(!message.mentions.users.first()) return bot.send("Вы не указали пользователя с которым хотите биться!");
        if(!message.mentions.users.first().id) return bot.send("Пользователь не найден");
        if(message.mentions.users.first().id==message.member.id) return bot.send("Мазохист!");
        if(profile[message.member.id].xp<=2) return bot.send("Вы Истощены, исцелитесь!");
        if(profile[message.mentions.users.first().id].hp<=2) return bot.send("Вы победили!");
        if(profile[message.mentions.users.first().id].mana <= 5) return bot.send("У вас закончилась мана, пополните запасы!");
        profile[message.mentions.users.first().id].hp = profile[message.mentions.users.first().id].hp - profile[message.member.id].damage*3;
        profile[message.member.id].xp = profile[message.member.id].xp + profile[message.member.id].damage/2;
        profile[message.member.id].mana = profile[message.member.id].mana - 5; 
        let idw = rUser;
        let name = idw;
        let emmed = new Discord.RichEmbed()
        .setDescription("Аттака")
        .setColor('#2008e3')
        .addField(profile[message.mentions.users.first().id].Uname,"Получил урона " + profile[message.member.id].damage*3)
        .addField(message.member.displayName," Получил опыта " + profile[message.member.id].damage/2)
        .addField(message.member.displayName," Осталось маны " + profile[message.member.id].mana);
        bot.send(emmed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "mattack"
};