const fs = require('fs');
let rawdata = fs.readFileSync('pair.json');
let pair = JSON.parse(rawdata);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'เช็คชื่อ',
    description: 'check attend',
    async execute(msg, args) {
        if (!msg.member.hasPermission("ADMINISTRATOR", true))
            return;

        var embed = new MessageEmbed()
            .setImage(msg.channel.guild.iconURL)
            .setColor('RANDOM')
            .setAuthor('ข้อมูลการเช็คชื่อ', msg.channel.guild.iconURL)
            .setTimestamp()
        const channels = msg.guild.channels.cache.filter(c => c.type === 'voice');
        let come = []
        let upset = []
        for (const [channelID, channel] of channels) {
            let room = pair.find(p => {
                return `#${p.room < 10 ? '0' + p.room : p.room} - Lab` == channel.name
            })
            if (!room) continue
            for (i = 0; i < room.member.length; i++) {
                if (channel.members.some(m => m.nickname.split(" ")[0] === room.member[i])) {
                    await come.push(room.member[i])
                } else {
                    await upset.push(room.member[i])
                }
            }
        }
        if (come.length === 0) {
            come.push('_')
        } if (upset.length === 0) {
            upset.push("_")
        }
        await embed.addField("มา", come)
        await embed.addField("ขาด", upset)
        await msg.reply(embed).catch()

    },
};