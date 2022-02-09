var express = require('express');
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

/* GET home page. */
router.get('/', function(req, res) {

	res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new page. */
router.get('/new', function(req, res) {
	res.render('form', { title: 'New Post' });
});

/* POST */
router.post('/new', function(req, res) {
	/* Get form contents from request */
	const messageText = req.body.text; // Input name="text"
	const messageUser = req.body.user; // Input name="user"

	/* Push form contents to messages array */
	messages.push({text: messageText, user: messageUser, added: new Date()});

	/* Redirect back to index page after submitting message */
	res.redirect('/');
});

module.exports = router;
