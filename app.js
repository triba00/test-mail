const sendEmail = require('./services/emailService');

(async () => {
  console.log("Tentativo di invio mail...");
  await sendEmail(
    "giuseppet100@gmail.com",
    "Test con gattino",
    "<h1>Bravo sei riuscito a mandare una mail!</h1>" +
    "<p>Sei riuscito a mandare una mail con nodemailer, tieni un gattino:</p>",
    [
      {
        filename: 'cat.jpg',
        path: './assets/cat.jpg'
      }
    ]
  );
})();