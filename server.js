const express = require('express');
const sendMail = require('./mail');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const app = express();

const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(rateLimit({
    windowMs: 12 * 60 * 60 * 1000,      //limit a submission every 12 hrs
    max: 1
}));

app.post('/email', (req, res) => {

    // console.log('Data: ', req.body);

    const { first, last, email, select, subject, message } = req.body;
    console.log('Data: ', first);

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'contact.html'));
});
app.listen(PORT, () => {
    console.log('Server is starting on PORT: ' + PORT);
});