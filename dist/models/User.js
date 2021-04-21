var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
var userSchema = new Schema({
    uuid: { type: String, unique: true },
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});
userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", userSchema);
