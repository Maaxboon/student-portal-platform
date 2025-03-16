const db = require("../config/db");

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            course_code TEXT UNIQUE NOT NULL,
            course_name TEXT NOT NULL,
            description TEXT,
            faculty_id INTEGER,
            FOREIGN KEY (faculty_id) REFERENCES users(id)
        )`
    );
});

module.exports = db;
