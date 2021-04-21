## File Upload

File upload uses ``express-fileupload`` to upload and save images to the server.

### Usage
Send a form submission with ``enctype="formdata/multipart"``

The name of the input used to select a file should have a name of "image"

If all works, you should see an new file in ``./uploads``

### Changes
Code differences from ``Master`` branch.

**app.js**
```javascript
...
const file-upload = require("express-fileupload")
...

...
app.use(fileupload({
    createParentPath: true
}))
...
```

**index.js** -> controllers
```javascript
...
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
...
```

**index.js** -> routes
```javascript
router.post('/upload', wrapper(indexController.uploadFile))
```