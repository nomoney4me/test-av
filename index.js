require('dotenv').config();

let nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});


var obj = {
    OS: process.env.OS,
    PROCESSOR_ARCHITECTURE: process.env.PROCESSOR_ARCHITECTURE
}

var mailOpts = {
    from: '"tmp box" <tmptest@example.com>',
    to: process.env.USER,
    subject: 'test scripting',
    text: JSON.stringify(obj)
}

transport.sendMail(mailOpts, (err, info) => {
    if (err) return console.error(err);
    console.log(info)
})