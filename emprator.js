const express = require("express");
const app = express();
/////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "%%";
const cooldown = new Set();
const cdtime = 7;
client.on("ready", () => {
  console.log(`${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  console.log(`Users: ${client.users.cache.size}`);
});
client.on("ready", () => {
  setInterval(() => {
    client.user.setActivity(`Type: %%help | Server ${client.guilds.cache.size}`);
  }, 2000);
});
client.on("warn", info => console.log(info));
client.on("error", console.error);

//===============help===========//
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setAuthor(message.author.username, message.author.AvatarURL)
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Click Here To Add : Security`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      ).setDescription(`
 __**ℹ | Info \ 📚 | Moderation Commands**__ 
-----------------------------
> n!userinfo -- n!ping -- n!serverinfo
> n!bot -- n!lock -- n!unlock -- n!clear
> n!ban -- n!mute -- n!unmute -- n!unban
-----------------------------
 __**🛡 | Security Commands**__ 
-----------------------------
> anti kick -- anti ban 
> anti roleC -- anti roleD 
> anti channelD -- anti channelC
> n!anti bot [on/off]
> n!problem [on/off]
> n!setting  
-----------------------------
`);

    message.channel.send(help);
  }
});

//===================token===========//
client.login("ODU0NDI0NzYyOTY5NDg5NDA4.YMjvEQ.MOHVz1NRqcv7sPxp8VVTZzpjapU");