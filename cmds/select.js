const Discord = module.require("discord.js");
//const Math = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    
     	//let roleAu = message.author.roles.get('344848334969765893');
    //if(!message.member.roles.get('663319647214370817')) return message.channel.send("У вас нет прав");
    if(!message.member.roles.get('662875224848465933')) return message.channel.send("Ты ещё не прожил жизнь...");
    if(message.member.roles.get('663319647214370817')) return false;
    if(!args[0]) return message.channel.send(`Ты прожил свою жизнь, смертный! Теперь тебе дорога в ... \n В рай - *!select angel* \n В ад - *!select demon* \n Стать целлестиалом - *!select cellestial* \n Стать магом - *!select wizard* `);
    if(args[0]=='angel'){
    	let sel = 'Ангелом';
    	message.member.addRole('662876260191436812');
    }
    if(args[0]=='demon'){
    	let sel = 'Демоном';
    	message.member.addRole('662873547848417301');
    }
    if(args[0]=='cellestial'){
    	let sel = 'Целлестиалом';
    	message.member.addRole('662883898140786723');
    }
    if(args[0]=='wizard'){
    	let sel = 'Магом';
    	message.member.addRole('663062714532233236');
    }
    message.channel.send(`Ура, теперь ты прошел трудности смертной жизни и стал ${sel}`);
    message.member.addRole('663319647214370817');
    }catch(err){

        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "select"
};