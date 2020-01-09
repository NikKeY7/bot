const Discord = module.require("discord.js");
//const Math = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
     profile[message.member.id].hp = profile[message.member.id].hp-1;
     	//let roleAu = message.author.roles.get('344848334969765893');
    //if(!message.member.roles.get('663319647214370817')) return message.channel.send("У вас нет прав");
    let rid = message.member.id;
    if(!message.member.roles.get('662875432135163954')) return message.channel.send("Вы не Администратор!");
    if(!args[0])
    {
        profile[rid].mana=profile[rid].mana+args[0];
        let emmed = new Discord.RichEmbed()
        .setDescription("Запас маны увеличен")
        .setColor('#009900')
        .addField(message.member.displayName,"На" + args[0] + " ед. маны");

        message.channel.send(emmed);
    }
    else
    {
        let rUser = message.mentions.users.first();
        let aid = rUser.id;
        profile[aid].mana=profile[rid].mana+args[0];
        let emmed = new Discord.RichEmbed()
        .setDescription("Запас маны " + profile[aid].Uname)
        .setColor('#009900')
        .addField("На " + args[0] + " ед. маны","Успешно");

        message.channel.send(emmed);
    }
    //if(!rUser) return bot.send("Пользователь не найден");
    
    

    
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "setmana"
};