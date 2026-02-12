require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});

const sendEmail = async (to, subject, htmlContent, attachments = []) => {
  try {
    const mailOptions = {
      from: `"Giuseppe Tribastone" <${process.env.SMTP_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    // Aggiungi allegati solo se presenti
    if (attachments && attachments.length > 0) {
      mailOptions.attachments = attachments;
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email inviata a: ${to} | ID: ${info.messageId}`);
    if (attachments.length > 0) {
      console.log(`Allegati: ${attachments.length}`);
    }
    return true;

  } catch (error) {
    console.error("Errore invio:", error);
    return false;
  }
};

module.exports = sendEmail;