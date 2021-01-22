   // Imports
const Discord = require('discord.js');
const conf = require('./config.js');
const bot = new Discord.Client();
const talkedRecently = new Set();

// Vars
const token = conf.discordAPI;
var prefix = conf.prefix;

// Main
bot.on('message', message => {
  if (message.author.bot) return;
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  let number = Math.floor(Math.random() * 76);
  let member = message.mentions.members.first(); 

    if (cmd === `${prefix}verify` && message.member.roles.cache.some(r => r.name === "Administrator")){
    // Remove unverified role
    var role= member.guild.roles.cache.find(role => role.name === "Unverified");
    member.roles.remove(role);
    // give the member role
    var role= member.guild.roles.cache.find(role => role.name === "Member");
    member.roles.add(role);
    // Post in General a Welcome message.
    bot.channels.cache.get('channelID').send(`✨Welcome, ${member}!✨🎉 Say Hello, <@&PingRoleID>!✨`);
  }
});
bot.login(token);