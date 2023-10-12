const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const products = require("./data/nproducts");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const { async } = require("rxjs");
const User = require("./models/UserModel");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { response } = require("express");
const e = require("express");
//dotenv config

dotenv.config();

//connecting to mongodb database
connectDb();

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to Node Server</h1>`);
});

app.post("/register", async (req, res) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
    const user = await User.create(req.body);
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.log(err);
    res.status(300).json({ status: "error" });
  }
});

app.post("/cart/add", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      email:req.body.user

    },{$push:{cart:req.body.product}})
    console.log(user);
  if (user) {
    res.json({status : "Ok"})
  } else {
    res.json({status : "Error!"})
  }
  }
   catch (error) {
    
  }
  
})
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    console.log(user);
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.json({ status: "verified" });
    } else res.json({ status: "try again" });
  } catch (err) {
    console.log(err);
    res.status(300).json({ status: "error" });
  }
});

app.post("/cart", async (req, res) => {
  const user = await User.findOne({
    email: req.body.user
  }).populate("cart");
  if (user) {
    res.status(200).json({user})
  }
  else (
    res.status(300).json({status:"error"})
  )
});

app.use("/api", productRoutes);
app.use(errorHandler);

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log("Server running on Port 8080");
});
