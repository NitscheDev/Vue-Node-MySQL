const router = require('express').Router();
const apiController = require('../controllers/api.controller');

/* Create Routes Below */ 


router.get('/', apiController.root);


/* Do not create new routes below this */ 
module.exports = router;