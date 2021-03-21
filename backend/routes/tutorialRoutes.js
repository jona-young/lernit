const express = require('express');
const router = express.router();
const tutorialController = require('../controllers/tutorialController.js');

/*
1. get to grab all tutorial posts
2. post to create a new tutorial
3. get(/:id) to grab individual tutorial
4. get(/:cat) to grab tutorials by category
5. delete(/:id) to delete individual tutorial
*/

module.exports = router;