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
        message.reply(points['Serpentard'].points)
    }

    if (message.content === prefix + "rserpentard") {
        message.reply('Retrait de 10 points pour Serpentard !')
        points['Serpentard'].points -= 10;
    } else if (message.content === prefix + "aserpentard") {
        message.reply('10 Points pour Serpentard !')
        points['Serpentard'].points += 10;
    }

    fs.writeFile('Storage/points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
});

bot.login(process.env.TOKEN);
