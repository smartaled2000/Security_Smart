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

//===================token===========//
client.login("ODU0NDI0NzYyOTY5NDg5NDA4.YMjvEQ.MOHVz1NRqcv7sPxp8VVTZzpjapU");