const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// 1️⃣ Serve frontend files (HTML, CSS, JS, header/footer)
app.use(express.static(path.join(__dirname, "../frontend")));

// 2️⃣ Serve images from Images folder
app.use("/Images", express.static(path.join(__dirname, "../Images")));

// 3️⃣ Fallback route (so any unknown URL loads index.html)
// app.get("/:any(*)", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

