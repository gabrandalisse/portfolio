require('dotenv').config()
const nodemailer = require('nodemailer')


export default async (req, res) => {
  console.log(req.body);

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

  await transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
