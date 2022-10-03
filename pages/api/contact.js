export default async (req, res) => {
  const { name, email, message, phone } = req.body;
  console.log(name, email, message, phone);
  return res.status(200).json({ error: "" });
};
