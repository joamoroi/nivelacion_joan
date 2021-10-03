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
      // const userTwo = await models.user.findById(userTwo)
      // console.log(userTwo)
      res.render('messages.pug', { title: 'Messages', userOneId, userTwoId, result, user });
      // console.log({ userOneId, userTwoId });
    } catch (err) {
      // console.log({ err });
      return res.json({ err });
    }
  };


module.exports = {
    chat,
};