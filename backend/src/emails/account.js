const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require('mailgun-js')({ apiKey, domain });

const sendDailyEmail = (email, name, file) => {
    mailgun
        .messages()
        .send({
            from: 'Sergey Segev <segev.sergey@sandbox782fae5cb8b64f338e34c7a8f07f7d57.mailgun.org>',
            to: email,
            subject: 'Corona signatures',
            text: `Hello ${name}, here are todays Conona signatures.`,
            attachment: file,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

module.exports = { sendDailyEmail };
