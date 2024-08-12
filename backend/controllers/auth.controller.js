const userModel = require("../mongodb/UserSchema");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

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
  try {
    const validUser = await userModel.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials!!"));
    }

    //JWT
    const token = JWT.sign({ id: validUser._id }, process.env.JWT_SecretKey, {
      expiresIn: "1h",
    });
    const { password: pass, ...validUserWithoutPassword } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(validUserWithoutPassword);
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin };
