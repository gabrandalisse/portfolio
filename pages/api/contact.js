require('dotenv').config();
const nodemailer = require('nodemailer')

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_ADRESS,
    to: "gabibrandalisse@gmail.com",
    subject: `[PORTFOLIO] Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) throw new Error(err.message);
    else console.log(info);
  });

  res.status(200).send();
}
