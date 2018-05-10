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

    if (message.content === prefix + "felicitation") {
        const directeur = message.guild.roles.find('name', 'Directeur').id;
        if (message.member.roles.has(directeur.id)) {
            message.reply('Ajout de 10 points pour Serdaigle !')
            points['Serdaigle'].points += 150;
        } else {
            message.reply(`Tu n'es pas Directeur !`)
        }
    }
    if (message.content === prefix + "aide") {
        message.channel.send({embed: {
            tile: "Aide Philosophale",
            color: 0x00A1D7,
            field: [{
                name: "Général",
                description: `!choipeaux | Permet d'être répartit dans une maison.
!balance | Permet de voir son compte bancaire.
!paye | Permet de reçevoir sa paye (Tout les 24h)
!points | Permet de voir le nombre de points de chaques maisons.`,
                inline: false
            },
            {
                name: "Professeur",
                description: `!agryffondor | Ajoute 10 points à Gryffondor.
!rgryffondor | Retire 10 points à Gryffondor.
!apoufsouffle | Ajoute 10 points à Poufsouffle.
!rpousouffle | Retire 10 points à Poufsouffle.
!aserdaigle | Ajoute 10 points à Serdaigle.
!rserdaigle | Retire 10 points à Serdaigle.
!aserpentard | Ajoute 10 points à Serpentard.
!rserpentard | Retire 10 points à Serpentard.`,
                inline: false
            }]
        }})
    }
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
