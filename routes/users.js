var express = require('express');
const { createUser, findAllUsers, findUserById, updateUserById } = require('../controllers/user.controller');
var router = express.Router();

/**
 * @Path /users
*/
router.post('/', createUser);
router.get('/', findAllUsers);
router.get('/:_id', findUserById);
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
