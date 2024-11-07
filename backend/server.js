const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser()); 

app.use("/uploads", express.static("../uploads"));

app.use("/api/posts/add", (req, res, next) => {
  const token = req.cookies["token"];
  console.log(token);
  
  if (!token) {
    // Hata mesajını JSON formatında döndür
    return res.status(403).json({ message: "Erişim Reddedildi" });
  }

  // Token doğrulaması (örneğin, JWT ile)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // Geçersiz token hatasını da JSON formatında döndür
      return res.status(403).json({ message: "Geçersiz Token" });
    }
    req.user = user;
    next();
  });
});

// Rotalar
app.use("/api/auth", authRoutes); // Kimlik doğrulama ve kullanıcı işlemleri
app.use("/api/posts", postRoutes); // Post işlemleri


// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
