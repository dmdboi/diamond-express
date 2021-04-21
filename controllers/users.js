const userService = require("../services/users");

const { login, verify, register } = require("../services/auth");

exports.register = async (req, res, next) => {
  let { username, email, password } = req.body 

  if(!username || !email || !password) {
    return res.status(400).send({ message: "Missing Credentials"})
  }

  const user = await userService.create(email, password);

  user.password = null

  //In production, DO NOT send back the full user object. This is for demo purposes
  return res
    .status(200)
    .send({ user });
};

exports.login = async (req, res, next) => {
  let {email, password } = req.body 

  if(!email || !password) {
    return res.status(400).send({ message: "Missing Credentials"})
  }

  let user = await userService.find({ email: email });

  if (!user) {
    return res.status(400).send({ message: "No User Exists" });
  }

  if(!user.validPassword(password)) {
    return res.status(400).send({ message: "Invalid Password" });
  }

  const token = await login(user);
  return res.status(200).send({ token });
};

exports.updateAccount = async (req, res, next) => {
  const { uuid } = req.user;

  let user = await userService.find({ uuid: uuid });

  const { email, password, username } = req.body;

  let update = {
    username: username,
    email: email,
  };

  if (!user.validPassword(password)) {
    console.log("Password Change");
    update.password = await user.encryptPassword(password);
  }

  await userService.update({ uuid: uuid }, update);

  return res.status(200).json({ message: "Account Updated" });
};

exports.deleteAccount = async (req, res, next) => {
  let user = await userService.find({ uuid: req.user.uuid });

  await userService.delete({ uuid: req.user.uuid });

  return res.status(200).json({ message: "Account Deleted" });
};

exports.me = async (req, res, next) => {
  let user = await userService.find({ uuid: req.user.uuid });

  user.password = null;

  return res.status(200).send({ user });
};
