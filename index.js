const express = require('express');
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.get('/', (req, res) => res.send("Basic cruds app with node & express."))

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))
