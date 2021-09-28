const models = require('../models');

const signIn = (req, res) => {
    let errorMessage;
	if (req.session.errorMessage) {
		errorMessage = req.session.errorMessage;
		delete req.session['errorMessage'];
	}
    res.render('sign-in.pug', { title: 'Sign In', errorMessage });
};
    
const signUp = (req, res) => {
    let errorMessage; 
	if (req.session.errorMessage) {
		errorMessage = req.session.errorMessage;
		delete req.session['errorMessage'];
	}
	return res.render('sign-up.pug', { title: 'Sign Up', errorMessage });
    
};

const users = async (req, res) => {
    let userType = 0;
	if (req.session.user) {
		const user = req.session.user;
		userType = user.admin ? 1 : 0;
		
	}
	if (userType == 0) {
		const allusers = await models.user.find({ username: { $ne: req.session.user.username } });
        // console.log(allusers)
		return res.render('users.pug', { title: 'User', userType, allusers });
	}
		const allusers = await models.user.find({ username: { $ne: req.session.user.username } });
		res.render('users.pug', { title: 'User', userType, allusers });
};

module.exports = {
    users,
    signIn,
    signUp,
};