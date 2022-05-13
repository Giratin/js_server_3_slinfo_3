const express = require("express");
const { create, getAll, getOne, update, deleteOne } = require("../controller/users.controller");
const router = express.Router();

/**
 * @Path: /users
 */


router.route('/')
    .post(create)
    .get(getAll);

router.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteOne);



module.exports = router;