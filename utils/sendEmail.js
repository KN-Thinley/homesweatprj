const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'homesweatkaja5@gmail.com', // Replace with your email address
        pass: 'Homesweat5' // Replace with your email password or app-specific password
    }
});

// Create the email message
const mailOptions = {
    from: 'homesweatkaja5@gmail.com', // Replace with your email address
    to: '12220043.gcit@rub.edu.bt', // Replace with recipient email address
    subject: 'Test Email',
    text: 'This is a test email'
};

// Send the email .sendMail is a method to pass mail to the user
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


