const fs = require('fs/promises');
const uuid = require('uuid')
const uuIdv4 = uuid.v4;

const getData = async () => fs.readFile('./server.json').then(data => JSON.parse(data));
const updateData = async (data) => fs.writeFile('./server.json', JSON.stringify(data));

module.exports.addUser = async (user) => {
    if (!user.firstName || !user.lastName || !user.email) {
        throw new Error("user must include username ,email and password");
    }
    const id = uuIdv4();
    user.id = id;
    const data = (await getData()) || [];
    const exists = data.users.find(
        ( _user) => _user.email === user.email
    );
    if (exists) {
        throw new Error("details already exist");
    }
    data.users.push(user);
    await updateData(data.users);
    return user;
}

module.exports.getAllUsers = async () => {
    const data = await getData();
    return data.users;
}

module.exports.getUserById = async (id) => {
    const data = await getData();
    return data.users.find(user => user.id === parseInt(id));
}

module.exports.updateUser = async (id, newUser) => {
    const data = await getData();
    const index = await data.users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
      throw new Error(`user with id ${id} not found`);
    }
    users.splice(index, 1);
    users.push(newUser)
    await updateData(data.users);
    return data.users;
}
module.exports.deleteUser=async (id)=>{
    const data = await getData();
    const index = await data.users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
      throw new Error(`user with id ${id} not found`);
    }
    users.splice(index, 1);
    await updateData(data.users);
    return data.users;
}
