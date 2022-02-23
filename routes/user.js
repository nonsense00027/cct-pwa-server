const express = require("express");
const router = express.Router();
const { getAllUsers, getOneUser } = require("../controllers/user");
const { userExist } = require("../middlewares");

// router.route("/find/:id").get(verifyToken, getOneMovie);

router.route("/:id").get(userExist, getOneUser);
//   .put(verifyToken, checkAdmin, updateMovie)
//   .delete(verifyToken, checkAdmin, deleteMovie);

router.route("/").get(getAllUsers);
//   .post(verifyToken, checkAdmin, createMovie);

// router.route("/random").get(verifyToken, getRandomMovie);

module.exports = router;
