exports.home = async (req, res, next) => {
  return res.status(200).json({ message: "Hello World" });
};
