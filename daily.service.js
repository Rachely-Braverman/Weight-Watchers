const fs = require('fs/promises');
const uuid = require('uuid');
const uuidv4 = uuid.v4;

//get all users
async function getDaily(id) {
    const data = await getAllJson();
    const user = await data.users.find(u => u.id === parseInt(id));
    return user.managerDaily;
}



//get all the json
async function getAllJson() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data;
}

//update json
const updateJson = async (data) => fs.writeFile('./users.json', JSON.stringify(data));

async function addDaily(id, d) {
    let daily = await getDaily(id);
    d.id = daily[daily.length - 1].id + 1;
    daily.push(d);
    const data = await getAllJson() || [];
    data.users.forEach(u => {
        if (u.id === parseInt(id)) {
            u.managerDaily = daily;
        }
    });
    await updateJson(data);
    return daily;
}

async function findByIdAndDelete(idu, idd) {
    const data = await getAllJson();
    const daily = await getDaily(idu);
    const indexDaily = await daily.findIndex(u => u.id === parseInt(idd));
    daily.splice(indexDaily, 1);
    data.users.forEach(u => {
        if (u.id === parseInt(idu)) {
            u.managerDaily = daily;
        }
    })
    try {
        await updateJson(data);
        return 'success!'
    } catch (err) {
        console.error(err)
        return 'faild'
    }
}

const updateDaily = async (idu, idd, daily) => {
    const data = await getAllJson();
    const theDairy = await getDaily(idu);
    theDairy.forEach(d => {
        if (d.id === parseInt(idd)) {
            Object.assign(d, daily);
        }
    })
    data.users.forEach(u => {
        if (u.id === parseInt(idd)) {
            u.managerDaily = theDairy;
        }
    })
    await updateJson(data);
    return theDairy;
}

module.exports = {
    getDaily,
    addDaily,
    findByIdAndDelete,
    updateDaily
}