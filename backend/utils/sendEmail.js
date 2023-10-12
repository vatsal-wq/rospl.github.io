const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "kotwanibharat7@gmail.com", // generated ethereal user
      pass: "T8ImKgWGFURqAfSZ", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'noreply@forgetch.com', // sender address
    to: "kotwanibharat7@gmail.com", // list of receivers
    subject: "Your order #MT12332345", // Subject line
    text: "Your Order is confirmed!", // plain text body
    html: "<b>Thanks for Shopping with us! Your order with ID MT12332345 is now confirmed and will be proccessed within the next 24/48hrs!</b>. Order contents are: 2x Intel i3 Desktop Processor, 1x Zotac 750ti Desktop GPU.", // html body
  });

  console.log("Message sent!");
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);