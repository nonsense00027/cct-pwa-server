const db = require("../configs/database");

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("results: ", result);
      res.status(200).send(result);
    }
  });
};

// GET ONE USER
exports.getOneUser = async (req, res) => {
  res.status(200).send(req.result);
};

// CREATE USER
// exports.createUser = async (req, res) => {

//   try {
//     const newMovie = new Movie(req.body);
//     const savedMovie = await newMovie.save();
//     return res.status(201).json(savedMovie);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// UPDATE USER
// exports.updateMovie = async (req, res) => {
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     return res.status(200).json(updatedMovie);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// DELETE USER
// exports.deleteMovie = async (req, res) => {
//   try {
//     await Movie.findByIdAndDelete(req.params.id);
//     return res.status(200).json({ message: "Movie has been deleted" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
