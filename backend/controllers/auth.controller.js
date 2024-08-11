const userModel = require("../mongodb/UserSchema");
const bcryptjs = require("bcryptjs");

module.exports = async (req, res, next) => {
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
    next(err);
  }
};
