const fs = require('fs');


function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

module.exports = {
    name: 'randompair',
    description: 'random pair',
    execute(msg, args) {
        if (!msg.member.hasPermission("ADMINISTRATOR", true))
            return;
        let rawdata = fs.readFileSync('student.json');
        let student = JSON.parse(rawdata);
        let shuffled = shuffle(student)
        let newPair = []
        for (i = 0; i < student.length; i += 2) {
            let room = { "room": parseInt(i / 2) + 1 }
            if (student[i + 1]) {
                room.member = [student[i].id, student[i + 1].id]
            } else {
                room.member = [student[i].id]
            }
            newPair.push(room)
        }
        let data = JSON.stringify(newPair);
        fs.writeFileSync('pair.json', data);
        msg.channel.send({
            files: [`./pair.json`]
        });

    },
};