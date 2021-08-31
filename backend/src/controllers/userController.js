const User = require("../model/userSchema.js");

const userSignup = async (req, res) => {
  try {
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      return res
        .status(401)
        .messagejson({ message: "User already exist" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json("user is successfully registered");
  } catch (error) {
    res.json("Error: ", error.message);
  }
};

module.exports = userSignup;
