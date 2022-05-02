/* const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/authors', (req, res) => res.send('Welcome'))

router.post('/posts', controllers.createPost);

module.exports = router; */

const express = require('express');
const router = express.Router();
const authorController = require('../controller/authorController');


router.get('/', authorController.findGigs);
//router.get('/:id', gigController.findGigById);


module.exports = router;