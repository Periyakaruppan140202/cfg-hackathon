var express = require("express");
var app = express();
let cookieParser = require("cookie-parser");
const Dbconnect = require("./database");
let cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
var morgan = require("morgan");
const helmet = require("helmet");
<<<<<<< HEAD
=======
const router = require("./Routes/route");
const jwt = require("jsonwebtoken");
>>>>>>> 2fb2ed45f109bb4ba6f691762536e3033ce48b98
const path = require("path");
const UploadRoute = require("./Routes/route");

Dbconnect();

const limiter = rateLimit({
  windowMs: (15 * 60 * 1000) / 3, // 15 minutes
  max: 300, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(limiter);
app.use(morgan("combined"));
app.use(helmet());

app.use("/upload", express.static(path.join(__dirname, "Uploads")));
app.use("/", UploadRoute);
app.get("/", (req, res) => {
  res.send("Welcome to CFG 2022");
});
app.use("/", router);
app.listen(process.env.PORT || 5600, () => {
  console.log("server started at 5600");
});
