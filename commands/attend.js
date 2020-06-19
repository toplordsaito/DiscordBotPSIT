const fs = require('fs');
let rawdata = fs.readFileSync('pair.json');
let pair = JSON.parse(rawdata);
module.exports = {
    name: 'เช็คชื่อ',
    description: 'check attend',
    execute(msg, args) {
        if (!msg.member.hasPermission("ADMINISTRATOR", true))
            return;
        const channels = msg.guild.channels.cache.filter(c => c.type === 'voice');
        for (const [channelID, channel] of channels) {
            let room = pair.find(p => p.room == channel.name)
            if (!room) continue
            for (i = 0; i < room.member.length; i++) {
                if (channel.members.some(m => m.nickname.split(" ")[0] === room.member[i])) {
                    msg.channel.send(`${room.member[i]} มา`)
                } else {
                    msg.channel.send(`${room.member[i]} ขาด`)
                }
            }
        }
    },
};