const express = require("express");
const cors = require("cors");
const { product } = require("./routes/product");
const { connect } = require("mongoose");
require("colors");

const app = express();

app.use(express.json());
app.use(cors());

// Database ga boglanish
const DATABASE_URL =
  "mongodb+srv://flowernozatursunova:3333@clusterr.hu2rd1r.mongodb.net/";
connect(DATABASE_URL)
  .then((res) => console.log("Database ga bog'landi".bgGreen))
  .catch((res) => console.log("Database ga bog'lanmadi".bgRed));

app.get("/", (req, res) => res.send(`<h1>Welcome</h1>`));

// routes
app.use("/product", product);

app.get("*", (req, res) => {
  res.send(
    `<img src="https://i.pinimg.com/originals/b6/b2/6a/b6b26a5967923abecb1be3c309a373da.png" alt="" />`
  );
});

const PORT = 5500;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`.bgCyan));
