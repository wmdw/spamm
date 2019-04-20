const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569089717354889228")
setInterval(function() {
channel.send(`Mamboooooooo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
