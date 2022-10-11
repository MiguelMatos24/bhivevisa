import nodemailer from "nodemailer";

const f = async (req, res) => {
  const { name, email, message, phone, country } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "miguelmatoss24@gmail.com",
      pass: "rdqbrfowyycihgkg",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "miguelmatoss24@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Phone: </strong> ${phone}</p><br>
        <p><strong>Country: </strong> ${country}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      
      `,
    });
    console.log("name", name);
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

export default f;
