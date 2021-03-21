const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const tutorialRoutes = require('./routes/tutorialRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');

// express app
const app = express();


const dbURI = "mongodb+srv://jonayoung:761z3JEGGw01Zj2b@lernit.vsyua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// url pathing
/*
app.use('/tutorials', tutorialRoutes);
app.use('/users', userRoutes);
 */