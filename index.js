const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client ();

//JSON Files
let points = JSON.parse(fs.readFileSync('Storage/points.json', 'utf8'));

bot.on('ready', () => {
    bot.user.setActivity('Aide : !aide');
    console.log("Serpentard est en jeu !");
});

bot.on('message', message => {
    if (!points['Serpentard']) points['Serpentard'] = {}
    if (!points['Serpentard'].points) points['Serpentard'].points = 0.
    let prefix = "!"

    fs.writeFile('Storage/points.json', JSON.stringify(points), (err) => {
        if (err) console.error (err);
})

    if (message.content === prefix + "serpentard") {
        points['Serpentard'].points += 10;
        message.reply('10 Points pour Serpentard !');
    }

    fs.writeFile('Storage/points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
});

bot.login('NDQzODIyMDAwNDg2NzQ0MDY3.DdS89g.KwKUL8pd-Dgq3nBQjcLlq4NjEXE');
