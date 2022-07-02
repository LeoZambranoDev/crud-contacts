var express = require('express');
var router = express.Router();

const UserController= require('../controllers/user.js');

/* GET home page. */
router.get('/', UserController.index);
router.post('/create', UserController.create);
router.post('/login', UserController.login);
router.get('/getContacts', UserController.getContacts);
router.post('/delete', UserController.delete);
router.post('/update', UserController.update);

module.exports = router;
