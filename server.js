const express = require('express');
const sendMail = require('./mail');
const logger = require('./middleware/logger');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const app = express();

const path = require('path');
const PORT = process.env.PORT || 8080;

//Initialize Logger Middleware
app.use(logger);


app.use(express.static(path.join(__dirname, 'dist')));


app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

function handleRedirect(req, res) {
    // console.log(req);
    const targetUrl = `${req.protocol}://${req.get('host')}`;
    if (req.originalUrl != 'index.html')
        targetUrl = targetUrl + req.originalUrl;
    res.redirect(targetUrl);
}


// Possible no use with mailgun bounces to avoid spam.
app.use(rateLimit({
    windowMs: 12 * 60 * 60 * 1000,      //limit a submission every 12 hrs
    max: 6
}));

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'error.html'));
    setTimeout(5000);
    handleRedirect(req, res);
});
app.get('/email/sent', (req, res) => {
    const targetUrl = `${req.protocol}://${req.get('host')}`;
    res.redirect(targetUrl);
});



app.post('/email', (req, res) => {

    // console.log('Data: ', req.body);

    const { first, last, email, select, subject, message } = req.body;
    // console.log('Data: ', first);



    //sendMail(data.first, data.last, data.email, data.select, data.subject, data.message);
    sendMail(first, last, email, select, subject, message, function (err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});











app.listen(PORT, () => {
    console.log('Server is starting on PORT: ' + PORT);
});