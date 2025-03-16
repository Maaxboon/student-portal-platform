const db = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// User Registration
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;

    db.run(sql, [name, email, hashedPassword, role || "student"], function (err) {
        if (err) {
            return res.status(400).json({ message: "Error registering user" });
        }
        res.json({ message: "User registered successfully", userId: this.lastID });
    });
};

// User Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
        if (err || !user) return res.status(400).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user });
    });
};

