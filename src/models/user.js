const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// Create users table if not exists
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'student'
    )
`);

module.exports = db;

