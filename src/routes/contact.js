var express = require('express');
var router = express.Router();

const ContactController= require('../controllers/contact.js');
const verifyToken = require('../middleware/verifyToken');
/* GET home page. */
router.get('/', ContactController.index);
router.post('/create', verifyToken, ContactController.create);
router.post('/update', verifyToken, ContactController.update);
router.post('/delete', verifyToken, ContactController.delete);
router.post('/getContact', verifyToken, ContactController.getContact);

module.exports = router;
