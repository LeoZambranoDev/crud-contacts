var express = require('express');
var router = express.Router();

const ContactController= require('../controllers/contact.js');

/* GET home page. */
router.get('/', ContactController.index);
router.post('/create', ContactController.create);
router.post('/update', ContactController.update);
router.post('/delete', ContactController.delete);
router.post('/getContact', ContactController.getContact);

module.exports = router;
