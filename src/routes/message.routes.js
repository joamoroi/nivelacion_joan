const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/create', controllers.message.create);

router.get('/chat', controllers.message.chat);

module.exports = router;