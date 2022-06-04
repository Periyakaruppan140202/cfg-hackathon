//Create Login Route
const router = require("express").Router();
const jwt = require("jsonwebtoken");

const users = [
  {
    email: "admin",
    password: "admin",
  },
  {
    email: "user",
    password: "user",
  },
];
//Login Route and JWT token generation
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = users.find((u) => String(u.email) == String(req.body.email));
    console.log(user);
    if (!user) {
      return res.status(400).send("User not found");
    }
    // const hashed = await bcrypt.hash(user.password, 10);
    if (user.password != req.body.password) {
      return res.status(400).send("Password is incorrect");
    }
    // const isMatch = await bcrypt.compare(req.body.password, hashed);
    // if (!isMatch) {
    //   return res.status(400).send("Invalid password");
    // }
    const token = jwt.sign({ user }, "secretkey", { expiresIn: "3d" });
    console.log(token);
    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
