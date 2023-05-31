const EmailModel = require('../model/emailModel');

// class EmailController {
//     async sendEmail(req, res) {
//         try {
//             const { to, subject, text } = req.body;

//             const emailModel = new EmailModel();
//             const response = await emailModel.sendEmail(to, subject, text);

//             res.send(response);
//         } catch (error) {
//             res.status(500).send('Error sending email');
//         }
//     }
// }
async function sendEmail(req, res) {
    try {
        const { to, subject, text } = req.body;

        const emailModel = new EmailModel();
        const response = await emailModel.sendEmail(to, subject, text);

        res.send(response);
    } catch (error) {
        res.status(500).send('Error sending email');
    }
}

module.exports = sendEmail;
