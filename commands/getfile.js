const fs = require('fs');
let rawdata = fs.readFileSync('pair.json');
let pair = JSON.parse(rawdata);
module.exports = {
    name: 'get',
    description: 'check attend',
    execute(msg, args) {
        if (!msg.member.hasPermission("ADMINISTRATOR", true))
            return;
        if (args !== "student" || args !== "pair") {
            msg.channel.send({
                files: [`./${args}.json`]
            });
        }
    },
};