const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/*
1. get to grab users (useful for user search to follow, friend, etc)
2. post to create a new user
3. get(/:id) to grab individual user
4. delete(/:id) to delete individual user
*/

module.exports = router;