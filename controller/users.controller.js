const { User } = require('../models/user.model');

var users = [
    new User(1, 'John', 'Doe', 'john@esprit.tn', 23),
]


const incrementId = () => {
    if (users.length == 0) {
        return 1;
    }
    return users[users.length - 1].id + 1;
}

const verifyEmail = (email)=>{
    const user = users.find(el => el.email == email);
    if(user){
        return false;
    }
    return true;
}

module.exports = {
    create: (req, res) => {
        const { firstName, lastName, age, email } = req.body;
        //verify if email is unique
        if(!verifyEmail(email)){
            return res.status(400).json({ message: "email already exists" });
        }
        const newUser = new User(incrementId(), firstName, lastName, email, age) ;
        users.push(newUser);
        res.status(201).json(newUser);

    },
    getAll: (req, res) => {
        res.json(users);
    },
    getOne: (req, res) => {
        const { id } = req.params;
        const user = users.find((el)=>{
            return el.id == id;
        });
        if(user){
            return res.status(200).json(user);
        }
        return res.status(404).send("User not found");
    },
    update: (req, res) => {
        const { id } = req.params;
        const userIndex = users.findIndex((el)=>{
            return el.id == id;
        });
        if(userIndex == -1){
            return res.status(404).send("User not found");
        }

        const { firstName, lastName, age, email } = req.body;
        users = users.map((el, index)=>{
            if(index == userIndex){
                el = new User(el.id, firstName, lastName, email, age);
            }
            return el;
        });
        res.json(users);
    },
    deleteOne: (req, res) => {
        const { id } = req.params;
        const userIndex = users.findIndex((el)=>{
            return el.id == id;
        });
        if(userIndex == -1){
            return res.status(404).send("User not found");
        }

        users = users.filter((el)=>{
            return el.id != id;
        })
        res.json(users);
    }
}