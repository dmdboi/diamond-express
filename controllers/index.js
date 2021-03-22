exports.home = async (req, res, next) => {
  return res.status(200).json({ message: "Hello World" });
};

exports.uploadFile = async (req, res, next) => {
  if(!req.files) {
      return res.status(400).json({ message: "No file uploaded"})
  }

  //The <input> used to select a file should have the name "image" or change code below to req.files.[inputname].
  //If in doubt, console.log(req.files)
  image = req.files.image;

  //Upload file to uploads folder
  image.mv('./uploads/' + image.name);

  return res.status(200).json({ message: "File upload"})
}