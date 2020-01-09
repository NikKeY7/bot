const Discord = require('discord.js');
const bot = new Discord.Client();
const express = require('express');
const keepalive = require('express-glitch-keepalive');
const app = express();
app.use(keepalive);
app.get('/', (req, res) => {
res.json('Бот запущен!');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});


bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});
bot.on('guildMemberAdd',(member)=>{
    //let role = member.guild.roles.find(r => r.name === "Новички - 0lvl");
    member.addRole('662875015242579968');
    bot.channels.get("662873129269460992").send(`Добро пожаловать, ${member.user}, на Божественно-Адский сервер!`);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    let uName = message.author.username;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            hp:10,
            maxHp:100,
            damage:5,
            Uname:uName,
            xp:0,
            lvl:1,
            mana:50,
        };
        
    };
    //bot.channels.get("662873129269460992").send(message.author.username);
    let u = profile[uid];

    
    if(u.hp<u.maxHp)
    {
        u.hp++;
    }
    if(u.hp>u.maxHp)
    {
        u.hp=u.maxHp;
    }
    if(u.hp<=0) {
        u.hp = 0;
    }
    u.mana++;
    u.mana++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
        u.maxHp= parseFloat(u.maxHp+u.lvl*10).toFixed();
        u.damage = parseFloat(u.damage*1.1).toFixed();
        message.channel.send(`Ура, <@${message.author.id}>, поднял свой уровень! Теперь его уровень - ${u.lvl} !`);
        if(u.lvl == 3) message.member.addRole('662875103851184143');
        if(u.lvl == 5) message.member.addRole('662875224848465933');
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.login(token);