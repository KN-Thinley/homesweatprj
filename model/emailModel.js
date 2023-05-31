// models/emailModel.js
const nodemailer = require('nodemailer');

class EmailModel {
    constructor() {
        // Configure your email service provider
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'dragonthunder0127@gmail.com', // Replace with your email address
                pass: 'Anupgurung001' // Replace with your email password
            }
        });
    }

    async sendEmail(to, subject, text) {
        try {
            const mailOptions = {
                from: 'dragonthunder0127@gmail.com', // Replace with your email address
                to: to,
                subject: subject,
                text: text
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            return info.response;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

module.exports = EmailModel;
