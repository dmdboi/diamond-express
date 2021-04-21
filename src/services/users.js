const User = require("../models/User");
const uniqid = require("uniqid");

const userService = {
  /**
   * @description Creates a User document in the database
   * @param {Object} body Object containing username, email and password
   * @return {Object} User Document
   */
  create: async function (body) {
    let document = new User();
    let { username, email, password } = body;

    document.uuid = uniqid("u");
    document.username = username;
    document.email = email;
    document.password = document.encryptPassword(password);

    await document.save();

    return document;
  },

  /**
   * @description Finds a User document in the database
   * @param {String} query Database Query
   * @return {Object} User Document
   */
  find: async function (query) {
    let document = await User.findOne(query);
    return document;
  },

  /**
   * @description Finds all User document in the database that match Query
   * @param {String} query Database Query
   * @return {Array} Array of User Documents
   */
  findAll: async function (query) {
    let documents = await User.find(query).select("-password -__v");

    return documents;
  },

  /**
   * @description Updates a User document in the database
   * @param {String} query Database Query
   * @return {Object} User Document
   */
  update: async function (query, body) {
    let document = await User.findOneAndUpdate(query, { $set: body });

    return document;
  },

  /**
   * @description Deletes a User document in the database
   * @param {String} query Database Query
   * @return {Object} User Document
   */
  delete: async function (query) {
    let document = await User.deleteOne(query);

    return document;
  },
};

module.exports = userService;
