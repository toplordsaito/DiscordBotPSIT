// const fs = require('fs');
// let rawdata = fs.readFileSync('pair.json');
// let pair = JSON.parse(rawdata);
// module.exports = {
//     name: 'voice',
//     description: 'call avatar',
//     execute(msg, args) {
//         const channels = msg.guild.channels.cache.filter(c => c.type === 'voice');
//         console.log(pair)
//         for (const [channelID, channel] of channels) {
//             console.log(`channal name ${channel.name}`)
//             let room = pair.find(p => p.room == channel.name)

//             if (!room) continue
//             console.log(room)
//             for (i = 0; i < room.member.length; i++) {
//                 if (channel.members.some(m => m.nickname === room.member[i])) {
//                     console.log(`${room.member[i]} มา`)
//                 } else {
//                     console.log(`${room.member[i]} ขาด`)
//                 }
//             }
//         }
//     },
// };