const express = require('express');
const cors = require('cors');
const routeURLs = require('./routes/routeURLs');
// const {PythonShell} = require("python-shell");
const app = express();
const PORT = 4001;

app.use(express.json());
app.use(cors());
app.use('/app',routeURLs);
app.listen(PORT,()=>console.log('listening on port 4001'));