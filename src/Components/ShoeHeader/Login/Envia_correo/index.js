// function numRandom(max, min) {
//   return Math.random() * (max - min) + min;
// }
// const num = numRandom(0, 6);

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "ayte2024@outlook.com",
//     pass: "12345678ayte",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// export async function EnviarCorreo(email) {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Proyecto Final Ayte 👻" <ayte2024@outlook.com>', // sender address
//     to: email, // list of receivers
//     subject: "Hello ", // Subject line
//     text: "Tu codigo de verificacion es:", // plain text body
//     html: num,
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// EnviarCorreo().catch(console.error);

// // eiderurrego4@gmail.com
