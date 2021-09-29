const models = require('../models');
const api = require('./api.controllers');
const services = require("../services");

const chat = async (req, res) => {
    try {
      const { userOneId, userTwoId } = req.session;
      // console.log({ userOneId, userTwoId });
      const result = await services.message.chat(userOneId, userTwoId);
      res.render('messages.pug', { title: 'Messages', userOneId, userTwoId, result });
    } catch (err) {
      // console.log({ err });
      return res.json({ err });
    }
  };


module.exports = {
    chat,
};