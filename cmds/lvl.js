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
    if(!args[0])
    {
        let emmed = new Discord.RichEmbed()
        .setDescription("Уровень участника")
        .setColor('#920892')
        .addField(message.member.displayName,"У вас " + profile[rid].lvl + " LVL")

        message.channel.send(emmed);
    }
    else
    {
        let rUser = message.mentions.users.first();
        let aid = rUser.id;
        let emmed = new Discord.RichEmbed()
        .setDescription("Уровень участника")
        .setColor('#009900')
        .addField("У " + profile[aid].Uname,profile[aid].lvl + " LVL")

        message.channel.send(emmed);
    }
    //if(!rUser) return bot.send("Пользователь не найден");
    
    

    
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "lvl"
};