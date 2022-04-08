require("dotenv").config();

const cloudinary = require("cloudinary").v2;

async function uploadPhoto(path) {
  // console.log("apakah", path);
  const url = await cloudinary.uploader.upload(path, (error, result) => {
    if (result) {
      return result;
    }
  });

  return url.secure_url;
}

module.exports = uploadPhoto;
