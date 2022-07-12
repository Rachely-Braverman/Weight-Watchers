const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors())

const port=process.env.PORT || 3000;
app.listen(port, ()=> {
	console.log(`SERVER STARTED PORT: ${port}`);
});

