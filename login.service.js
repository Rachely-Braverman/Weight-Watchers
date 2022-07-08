const fs = require('fs/promises');

//get all the json
async function getAllJson() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data;
}

async function login(email, phone) {
    const data = await getAllJson();
    const user = await data.users.find(u => u.email === email && u.phone === phone);
    if (user)
        return user;
    else {
        if (data.manager.email === email && data.manager.phone === phone)
            return data.manager;
    }
}

module.exports = {
    login
}