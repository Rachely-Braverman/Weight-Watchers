const express = require('express');
const app = express();
const user = require('./routes/user.router');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config();
const port = process.env.PORT || 3000;
const config = {
	authRequired: false,
	auth0Logout: true,
	baseURL: 'http://localhost:3000',
	clientID: 'liaE9vufSGt4u8mNQmqjCacELFKzvici',
	issuerBaseURL: 'https://dev-0qz615kl.us.auth0.com',
	secret: 'v1qfpFpw2jwIWuRtB9gP6lsFLVTDwUJC2TkiY8VVd_a8RyylDa9M5xv1RF61Fg0A'
};

app.use(bodyParser.json());
app.use(cors())
app.use(auth(config));
app.use(requiresAuth());

app.get('/', (req, res) => {
	if (req.oidc.isAuthenticated()) {
		'Logged in';
	} else {
		'Logged out';
	}

});

app.get('/profile', (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', requiresAuth(), user);

const session = {
	secret: process.env.SESSION_SECRET,
	cookie: { path: '/', httpOnly: true, secure: false, maxAge: null },
	resave: false,
	saveUninitialized: false
};

if (app.get("env") === "production") {
	session.cookie.secure = true;
}

app.listen(port, () => {
	console.log(`SERVER STARTED PORT: ${port}`);
});
