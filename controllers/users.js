const { v4: uuidv4 } = require('uuid');

let users = [];

const CreateUser = (req, res) => {
    const data = { ...req.body, id: uuidv4() }
    users.push(data)
    res.send(data)
}

const GetUsers = (req, res) => {
    res.send(users)
}

const GetUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((item) => item.id === id)
    console.log(user)
    res.send(user)
}

const UpdateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(item => item.id === id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id ${id} has been upated.`)
}

const DeleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(item => item.id !== id)
    res.send(`User with id ${id} has been deleted.`)
}

module.exports = {
    CreateUser,
    GetUsers,
    GetUser,
    UpdateUser,
    DeleteUser
}