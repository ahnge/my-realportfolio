// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Message: ${req.body.message}
    `;

  const data = {
    to: "scotthomles4@gmail.com",
    from: "nayzaw@nayzaw.com",
    subject: "New web form message from nayzaw.com!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  sgMail
    .send(data)
    .then(() => {
      console.log("mail has sent");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "notOK" });
    });

  res.status(200).json({ status: "OK" });
}
