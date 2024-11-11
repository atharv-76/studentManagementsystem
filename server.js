const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "Abcd@1234", // Replace with your MySQL password
  database: "regdb", // The database you're using
});

// Check database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// POST route to register a student
app.post("/api/students/register", (req, res) => {
  const { name, email, phoneNumber } = req.body;

  const query = "INSERT INTO name (name, email, phone_number) VALUES (?, ?, ?)";
  db.query(query, [name, email, phoneNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error registering student" });
    }
    res.status(201).json({ id: result.insertId, name, email, phoneNumber });
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
