const db = require("../configs/database");

exports.userExist = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        req.result = result[0];
        next();
      } else {
        res.status(404).send({ message: "User not found" });
      }
    }
  });
};
