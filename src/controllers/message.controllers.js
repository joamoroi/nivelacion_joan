const models = require('../models');
const api = require('./api.controllers');
const services = require("../services");

const chat = async (req, res) => {
    try {
      const { userOneId, userTwoId } = req.session;
      // console.log({ userOneId, userTwoId });
      const result = await services.message.chat(userOneId, userTwoId);
      // console.log(result)
      const user = req.session.user
      const user2 = await models.user.findById(userTwoId)
      // console.log(user2)
      res.render('messages.pug', { title: 'Messages', userOneId, userTwoId, result, user, user2 });
      // console.log({ userOneId, userTwoId });
    } catch (err) {
      // console.log({ err });
      return res.json({ err });
    }
  };


module.exports = {
    chat,
};