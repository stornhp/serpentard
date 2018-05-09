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
    if (!points['Serdaigle']) points['Serdaigle'] = {}
    if (!points['Serdaigle'].points) points['Serdaigle'].points = 0.
    if (!points['Poufsouffle']) points['Poufsouffle'] = {}
    if (!points['Poufsouffle'].points) points['Poufsouffle'].points = 0.
    if (!points['Gryffondor']) points['Gryffondor'] = {}
    if (!points['Gryffondor'].points) points['Gryffondor'].points = 0.
    if (!points['Serpentard']) points['Serpentard'] = {}
    if (!points['Serpentard'].points) points['Serpentard'].points = 0.
    let prefix = "!"

    fs.writeFile('Storage/points.json', JSON.stringify(points), (err) => {
        if (err) console.error (err);
    })

    if (message.content  === prefix + "points") {
        message.channel.send({embed: {
            title: "Points Des Maisons",
            color: 0x00A1D7,
            fields: [{
                name: "Serpentard",
                value: points['Serpentard'].points,
                inline: true
            },
            {
                name: "Gryffondor",
                value: points['Gryffondor'].points,
                inline: true
            },
            {
                name: "Poufsouffle",
                value: points['Poufsouffle'].points,
                inline: true
            },
            {
                name: "Serdaigle",
                value: points['Serdaigle'].points,
                inline: true
            }]
        }})
    }
        
    if (message.content === prefix + "rserdaigle") {
        message.reply('Retrait de 10 points pour Serdaigle !')
        points['Serdaigle'].points -= 10;
    } else if (message.content === prefix + "aserdaigle") {
        message.reply('Ajout de 10 points pour Serdaigle !')
        points['Serdaigle'].points += 10;
    }
    
    if (message.content === prefix + "rpoufsouffle") {
        message.reply('Retrait de 10 points pour Poufsouffle !')
        points['Poufsouffle'].points -= 10;
    } else if (message.content === prefix + "apoufsouffle") {
        message.reply('Ajout de 10 points pour Poufsouffle !')
        points['Poufsouffle'].points += 10;
    }
    
    if (message.content === prefix + "rserpentard") {
        message.reply('Retrait de 10 points pour Serpentard !')
        points['Serpentard'].points -= 10;
    } else if (message.content === prefix + "aserpentard") {
        message.reply('Ajout de 10 points pour Serpentard !')
        points['Serpentard'].points += 10;
    }

    if (message.content === prefix + "rgryffondor") {
        message.reply('Retrait de 10 points pour Gryffondor !')
        points['Gryffondor'].points -= 10;
    } else if (message.content === prefix + "agryffondor") {
        message.reply('Ajout de 10 points pour Gryffondor !')
        points['Gryffondor'].points += 10;
    }
    
    fs.writeFile('Storage/points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
});

bot.login(process.env.TOKEN);
