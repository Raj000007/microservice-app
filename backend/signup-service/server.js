const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  console.log("User Registered:", req.body);
  res.json({ message: "Signup Successful!" });
});

app.listen(PORT, () => console.log(`Signup Service running on port ${PORT}`));
