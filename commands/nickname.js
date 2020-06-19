const fs = require('fs');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'id',
    description: 'Ping!',
    execute(msg, args) {
        let addSec = async (id, name) => {

            let rawdata = fs.readFileSync('student.json');
            let student = JSON.parse(rawdata);
            student = student.find(st => st.id == id && st.name === name)

            if (!student) {
                msg.reply('ไม่พบข้อมูลนักศึกษา กรุณาติดต่อ TA')
                return
            }
            let sec = student.sec
            msg.guild.roles.cache.forEach(element => {
                console.log(element)
            });
            const role = msg.guild.roles.cache.find(role => role.name === `sec${sec}`)
            if (role == null) {
                msg.channel.send("Error Role DoesNotExist");
                return;
            }
            if (msg.member == null) {
                msg.channel.send("```diff\n- Error occured, sender of that msg was null. Discord claims you do not exist. Debug info: " + message.member + " " + message.author + "```");
                return;
            }
            try {
                await msg.member.roles.set(['723149958441598977', role.id])
                await msg.member.setNickname(args)
                var embed = new MessageEmbed()
                    .setImage(msg.author.displayAvatarURL())
                    .setColor('RANDOM')
                    .setAuthor('registration completed', msg.channel.guild.iconURL)
                    .addField('รหัศนักศึกษา : ', student.id)
                    .addField('ชื่อ : ', student.name)
                    .addField('sec : ', student.sec)
                    .setTimestamp()
                msg.reply(embed).catch()
            } catch (error) {
                console.log(error)
                msg.reply(error.message)
            }

        }

        try {
            let re = new RegExp('^61070\\d\\d\\d')
            let argument = args.split(" ")
            let stdId = argument[0]
            let stdName = argument[1]
            if (msg.member.nickname && re.test(msg.member.nickname.split(' ')[0])) {
                msg.reply("คุณเปลี่ยนชื่อเล่นไปแล้ว กรุณาติดต่อ TA")
                return
            }
            if (stdId && stdName && re.test(stdId)) {
                addSec(stdId, stdName)
            } else {
                msg.reply("ผิดพลาด กรุณาพิมพ์  !id รหัศนักศึกษา ชื่อจริงไม่ต้องมีนามสกุุล เช่น !id 63070002 สมชาย")
            }
        } catch (error) {
            console.log(error.message)
            msg.reply("ผิดพลาด กรุณาติดต่อ TA")
        }

    },
};

