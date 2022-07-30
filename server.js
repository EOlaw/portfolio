//grab all the things we need
const express = require('express');


//set the view engine to ejs
app.set('view engine', 'ejs');


//configure the app
const app = express();
app.use(express.json());

//Connection to Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://EOlaw146:Olawalee_.146@cluster0.4wv68hn.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


//create routes
app.get('/', (req, res) => {
    res.render('pages/portfolio');
});
app.get('/login', (req, res) => {
    res.render('pages/login');
})

//server.js server start
app.listen(3000, (req, res) => {
    console.log('listening on port 3000.....')
})