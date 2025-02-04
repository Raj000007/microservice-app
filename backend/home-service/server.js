const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5003;

app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  res.json({ message: "Welcome to Home Page", ridesAvailable: ["Ride 1", "Ride 2"] });
});

app.listen(PORT, () => console.log(`Home Service running on port ${PORT}`));
