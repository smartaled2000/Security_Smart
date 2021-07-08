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
client.on("message", message => {
  if (message.content === prefix + "help") {
    var embed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setImage("")
.setTitle(`**🛡️Click for a help list**`);
message.channel.send(embed).then(msg => {
msg.react(`🛡️`)
msg.react(`❌`)

const gFilter = (reaction, user) => reaction.emoji.name === `🛡️` && user.id === message.author.id
const g = msg.createReactionCollector(gFilter , {time : 200000})

const dFilter = (reaction, user) => reaction.emoji.name === `❌` && user.id === message.author.id
const d = msg.createReactionCollector(dFilter , {time : 200000})


g.on('collect', (reaction , user) => {
var embed = new Discord.MessageEmbed()
.setColor("#ffff00")
.setDescription(`**
⚙️Moderation Commands 
%%userinfo -- %%ping -- %%serverinfo
%%bot -- %%lock -- %%unlock -- %%clear
%%ban -- %%mute -- %%unmute -- %%unban

🛡️Security Commands
%%anti kick -- %%anti ban 
%%anti roleC -- %%anti roleD 
%%anti channelD -- %%anti channelC
%%anti bot [on/off]
%%problem [on/off]
**`)
msg.edit(embed)
reaction.users.remove(user.id)
})

  d.on('collect', (reaction , user) => {
msg.delete()
})
});
    message.channel.send();
  }
});
//===================token===========//
client.login("ODU0NDI0NzYyOTY5NDg5NDA4.YMjvEQ.MOHVz1NRqcv7sPxp8VVTZzpjapU");