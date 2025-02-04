const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password") {
    res.json({ message: "Login Successful", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(PORT, () => console.log(`Login Service running on port ${PORT}`));
