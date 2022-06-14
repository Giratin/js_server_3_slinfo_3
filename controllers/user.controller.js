const { User } = require("../models/user.model");


module.exports = {
    createUser: async (req, res) => {
        // FullName, Email, Password, Age <== req.body
        const { FullName, Email, Password, Age } = req.body;
        // new User(req.body).save((exc,doc)=>{
        //     if(exc){
        //         return res.status(400).json(exc);
        //     }
        //     res.status(201).json(doc)
        // })

        const user = new User(req.body);
        try {
            await user.save();
            res.status(201).json(user);
        } catch (exception) {
            res.status(400).json(exception);
        }
    },
    findAllUsers: (req, res) => {
        User.find()
            .then((docs) => {
                res.status(200).json(docs);
            })
            .catch((exc) => {
                res.status(400).json(exc);
            })
    },
    findUserById: async (req, res) => {
        const { _id } = req.params;
        console.log(_id);
        User.findById(_id, (error, doc) => {
            console.log(doc);
            res.json(doc)
        })
    },
    updateUserById: async (req, res) => {
        const { _id } = req.params;
        const { FullName, Email, Password, Age } = req.body;
        //{...req.body } spread operator
        User.findByIdAndUpdate(_id, { ...req.body }, { new: true }, (err, doc) => {
            if (err) {
                return res.status(400).json(err)
            }
            res.json(doc);
        })
    }
}