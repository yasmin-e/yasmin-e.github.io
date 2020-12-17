const express = require("express");
const cors = require("cors");
const mailer = require("nodemailer");

const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('server running on port 5000'));

const contactEmail = mailer.createTransport({
 service: 'gmail',
 auth: {
  user: "abdelkefiy@gmail.com",
  pass: "Aslema2019"
 },
});

contactEmail.verify((error) => {
 if (error) {
  console.log(error);
 } console.log('ready to send');
});

router.post('/contact', (req, res) => {
 const { name, email, message } = req.body;
 const mail = {
  from: name,
  to: 'abdelkefiy@gmail.com',
  subject: 'Message from yasmin-e.github.io',
  html: 
   `<p>Name: ${name}</p>
   <p>Email: ${email}</p>
   <p>Message: ${message}</p>`,
 };
 contactEmail.sendMail(mail, (error) => {
  if (error) {
   res.json({ status: 'error' });
  } res.json({ status: 'ok' });
 });
});
