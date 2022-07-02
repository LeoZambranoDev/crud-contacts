var express = require('express');
var router = express.Router();

const UserController= require('../controllers/user.js');

const verifyToken = require('../middleware/verifyToken');

/* GET home page. */
router.get('/', verifyToken , UserController.index);
router.post('/create', UserController.create);
router.post('/login', UserController.login);
router.get('/getContacts', verifyToken, UserController.getContacts);
router.post('/delete',verifyToken, UserController.delete);
router.post('/update',verifyToken, UserController.update);

module.exports = router;
