const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();


const mg = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    }
};

const myEmail = process.env.EMAIL;

const transporter = nodemailer.createTransport(mailGun(mg));

const sendMail = (first, last, email, select, subject, message, cb) => {

    const mailOptions = {
        from: `${email}`,
        to: myEmail,
        subject: `'${subject}' by ${first} ${last}`,
        text:
            `Inquiry: ${first} ${last} - ${select} 
        ${message}`
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
            console.log(err);
        }
        else {
            cb(null, err);
            console.log('SENT');
        }
    });
};

module.exports = sendMail;