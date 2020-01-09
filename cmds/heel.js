const Discord = module.require("discord.js");
//const Math = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
function isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
}
module.exports.run = async (bot,message,args) => {
    try{
    
      if(!args[0]) return message.channel.send("Вы не указали количество ХП");
      if(!message.member.roles.get('664549141828861955')) return message.channel.send("Вы не владеете магическими навыками!");
      if(profile[message.member.id].mana - args[0]*15 <= 0) return message.channel.send("Нужно больше маны");
      if(!isNumeric(args[0])) return message.channel.send("Ошибка! Введите число");
      if(!args[1])
      {
        profile[message.member.id].hp = profile[message.member.id].hp + args[0];
        profile[message.member.id].mana = profile[message.member.id].mana - args[0]*15;
        message.channel.send(`Вы успешно отрегенировали ${args[0]} ХП!`);
      } else {
        profile[message.mentions.users.first().id].hp = profile[message.mentions.users.first().id].hp + args[0];
        profile[message.member.id].mana = profile[message.member.id].mana - args[0]*15;
        message.channel.send(`Вы успешно отрегенировали ${args[0]} ХП игроку ${profile[message.mentions.users.first().id].Uname}!`);
      }
      
      
      
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "heel"
};