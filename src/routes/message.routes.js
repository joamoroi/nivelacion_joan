const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/chat', middlewares.validations.sessionOn, controllers.message.chat);

router.get("/toChat/:userOneId/:userTwoId", middlewares.validations.sessionOn, controllers.api.toChat);

module.exports = router;