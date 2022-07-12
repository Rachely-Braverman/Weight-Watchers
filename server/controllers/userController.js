const service = require('../services/userService');

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await service.getAllUsers();
        res.status(200).json({ users });
        // res.send(users);
    }
    catch (err) {
        next(err);
    }
}

module.exports.getUserById = async (req, res, next) => {
    console.log(req);
    try {
        const user = await service.getUserById(req.params.id);
        // res.status(200).json({users});
        res.send(user);
    }
    catch (err) {
        next(err);
    }
}

module.exports.addUser = async (req, res, next) => {
    console.log(req);
    try {
        const users = await service.addUser(req.body);
        
        res.status(200).send(users);
    }
    catch (err) {
        next(err)
    }
    
}

module.exports.updateUser = async (req, res, next) => {
    try {
        const users = await service.updateUser(req.params.id, req.body);
        res.status(200).send(users);
    }
    catch (err) {
        next(err)
    }
};

module.exports.deleteUser = async (req, res, next) => {
    try {
        await service.deleteUser(req.params.id);
        res.send();
        
    } catch (err) {
        next(err);
    }
}