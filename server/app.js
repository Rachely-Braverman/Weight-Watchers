const express = require('express');
const app = express();
const user = require('./routes/userRouter');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors())

app.use('/users', user);

const port=process.env.PORT || 3000;
app.listen(port, ()=> {
	console.log(`SERVER STARTED PORT: ${port}`);
});

