const userModel = require("../mongodb/UserSchema");
const bcryptjs = require("bcryptjs");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  try {
    const data = await userModel.create({
      username,
      email,
      password: hashpassword,
    });
    res.json({ msg: data });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};
