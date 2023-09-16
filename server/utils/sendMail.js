import nodemailer from "nodemailer";

const mailer = (mailOptions) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    debug: true,
    });


    if (emails) {
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
        console.log(err);
        } else {
        console.log("Email sent" + info);
        }
    });
    }
}

export default mailer;