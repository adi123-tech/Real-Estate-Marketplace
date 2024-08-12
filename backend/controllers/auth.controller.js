const userModel = require("../mongodb/UserSchema");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");

const signup = async (req, res, next) => {
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

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  try {
    const validUser = await userModel.find({ email });
    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials!!"));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin };
