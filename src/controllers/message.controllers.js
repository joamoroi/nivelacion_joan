const models = require('../models');
const api = require('./api.controllers')

const create = (req, res) => {

    // let errorMessage;
	// if (req.session.errorMessage) {
	// 	errorMessage = req.session.errorMessage;
	// 	delete req.session['errorMessage'];
	// }
    // res.render('messages.pug', { title: 'Messages', errorMessage });
    res.json({message: 'message created'});
};

const chat = async (req, res) => {
    // const { userOneId, userTwoId } = req.session;
    const userOneId = "61521e7e9e841908b20e22ff"
    const userTwoId = "61521e859e841908b20e2302"
    req.body["userOneId"] = userOneId;
    req.body["userTwoId"] = userTwoId
    await api.chat(req, res);
    // res.json({message: 'chat created'});
};


module.exports = {
    create,
    chat,
};