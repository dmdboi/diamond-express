const jwt = require("jsonwebtoken");

const userService = require("./users");
const config = require("../config/config");

/**
 * @description Authentication via Email & Password
 * @param {Object} User An object with a User's credentials.
 * @return {String} A JSON Web Token
 */
exports.login = async (user) => {
  const token = jwt.sign(
    { 
      username: user.username, 
      uuid: user.uuid 
    },
    config.JWT_SECRET,
    {
        expiresIn: "3h",
    });
    return token;
}

/**
 * @description Verifies if a JWT is valid
 * @param {Object} User user Token object with a user uuid and role.
 * @return {Object} The user's document from the database minus password
 */
exports.verify = async (user) => {
  const userDocument = await userService.find({ uuid: user.uuid });

  userDocument["password"] = null;

  return userDocument;
};

/**
 * @description Creates a user in the database  via userService
 * @param {Object} User An object with an email, username and password
 * @return {Object} The user's document from the database minus password
 */
exports.register = async (body) => {
  //Do validation on Req body
  let user = await userService.create(body);
  return user;
};