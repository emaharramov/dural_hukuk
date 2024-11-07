const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken"); // Ensure JWT is required if you're using it in middleware

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001", // Ensure the client's origin matches this URL
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const hostname = "http://localhost:3000"; // Sunucunun adresi

app.post("/upload", (req, res) => {
  const file = req.file; // Dosya yükleme işlemi burada yapıldığını varsayıyoruz
  const imageUrl = `${hostname}/uploads/${file.filename}`;
  res.json({ imageUrl });
});

// Define the /dashboard/newsadd route on the app instance
app.get("/dashboard/newsadd", async (req, res) => {
  try {
    // Simulated database access or other logic here
    res.send("News Add Page");
  } catch (error) {
    console.error("Error at /dashboard/newsadd:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api/posts/add", (req, res, next) => {
  const token = req.cookies["token"];
  console.log(token);

  if (!token) {
    return res.status(403).json({ message: "Access Denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
