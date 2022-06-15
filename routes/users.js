var express = require('express');
const { createUser, findAllUsers, findUserById, updateUserById } = require('../controllers/user.controller');
var router = express.Router();


const verifyDataMiddleware = (req, res, next) => {
	const { hasAccess } = req.query;
	if (!hasAccess || hasAccess == false) {
		return res.status(204).end('You dont have access');
	}
	next();
}


const verifyHeaders = (req, res, next) => {
	const { token } = req.headers;
	if (!token || token != 'blabla') {
		return res.status(403).end('No Access Granted')
	}
	let user = {
		id: 1,
		email: "test@mail.com",
		role: 'admin'
	}
	req.user = user
	next();
}

const mongoose = require("mongoose");

const verifyObjectId = (req, res, next) => {
	const { _id } = req.params;
	if(!mongoose.Types.ObjectId.isValid(_id) ){
		return res.status(404).json({
			message: "It is not an instance of ObjectID"
		})
	}
	next();
}



/**
 * @Path /users
*/
router.post('/', createUser);
router.get('/', verifyHeaders, verifyDataMiddleware, findAllUsers);
router.get('/:_id', verifyObjectId, findUserById);
router.put('/:_id', updateUserById);


let o = {
	"Email": "joshn.doe.1@esprit.tn",
	"Password": "password",
	"InsertedAt": "2022-06-14T09:10:34.377Z",
	"_id": "62a850b450614f25b45e1e48",
	"createdAt": "2022-06-14T09:11:16.472Z",
	"updatedAt": "2022-06-14T09:11:16.472Z",
	"__v": 0
}
module.exports = router;
