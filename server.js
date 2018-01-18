const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    // this is going to be the key to get user code from cookie
    secret: 'This is a random string secret',
    // saves on each edit
    resave: false,
    // we need to add a propertity to our session
    saveUninitialized: false
}));


const userController = require('./controllers/userController.js');
app.use('/users', userController);


app.get('/', (req,res) =>{
    res.send('Go to more interesting pages')
});



app.get('*', (req,res) =>{
    res.send("👽 404 👽")
});



app.listen(3002, (req,res) =>{
    console.log('doing steps')
});

