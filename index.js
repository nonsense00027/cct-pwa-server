const express = require("express");
const cors = require("cors");

require("dotenv").config();

// ROUTES
const userRoute = require("./routes/user");

const db = require("./configs/database");
db.connect(function (err) {
  if (err) throw err;
  console.log("connected database");
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("server running on port 3001");
});
