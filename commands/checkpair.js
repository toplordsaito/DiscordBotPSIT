const fs = require('fs');
const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'pair',
    description: 'check pair',
    execute(msg, args) {
        let rawdata = fs.readFileSync('pair.json');
        let pair = JSON.parse(rawdata);
        let myPair = pair.find(p => p.member.some(id => id === msg.member.nickname.split(' ')[0]))
        if (myPair) {
            var embed = new MessageEmbed()
                .setColor('RANDOM')
                .addField('ห้อง : ', myPair.room)
                .addField('รหัศนักศึกษา : ', myPair.member)
            msg.reply(embed).catch()
        } else {
            msg.reply("ผิดพลาดไม่พบคู่แพร์ของคุณ")
        }


    },
};