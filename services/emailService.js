require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Invia una email con supporto completo per allegati.
 * * @param {string} to - L'indirizzo del destinatario
 * @param {string} subject - L'oggetto dell'email
 * @param {string} htmlContent - Il corpo HTML (generato da React Email o stringa)
 * @param {Array} attachments - (Opzionale) Array di oggetti allegato
 */
const sendEmail = async (to, subject, htmlContent, attachments = []) => {
  try {
    const mailOptions = {
      from: `"Giuseppe Tribastone" <${process.env.SMTP_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
      attachments: attachments,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`Email inviata a: ${to}`);
    console.log(`Message ID: ${info.messageId}`);

    if (attachments.length > 0) {
      console.log(`Allegati inviati: ${attachments.length}`);
    }

    return true;

  } catch (error) {
    console.error("Errore invio email:", error);
    return false;
  }
};

module.exports = sendEmail;