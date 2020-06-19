const fs = require('fs');
let rawdata = fs.readFileSync('pair.json');
let pair = JSON.parse(rawdata);

module.exports = {
    name: 'pair',
    description: 'Ping!',
    execute(msg, args) {
        let myPair = pair.find(p => p.member.some(id => id === msg.member.nickname))
        console.log(myPair)
        // msg.reply(JSON.stringify(myPair));
        msg.reply(`ห้อง : ${myPair.room}`)
        msg.reply(`คู่แพร์ : ${myPair.member}`)

    },
};