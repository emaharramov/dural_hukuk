// middlewares/upload.js
const multer = require("multer");
const path = require("path");

// Yüklenen dosyaları "uploads" klasöründe sakla
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Benzersiz dosya adı
  },
});

// Sadece resim dosyalarını kabul et
const fileFilter = (req, file, cb) => {
  console.log(file); // Dosya bilgilerini kontrol etmek için loglayın
  if (file.mimetype && file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};


const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
