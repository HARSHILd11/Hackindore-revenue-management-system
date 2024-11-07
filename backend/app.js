const express = require("express");
const app = express();
const router = require("./routes/auth");
const cors = require("cors");
const { UserDetails } = require("./models/userdetails");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;  // Uppercase PORT
const url = process.env.backend_link;

// Connect to the database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => console.log("Connected to Database"));
mongoose.connection.on("error", (error) => console.error("Database connection error:", error));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

// Routes
app.get("/", (req, res) => {
    res.json("hello");
});

app.post("/userdetails", (req, res) => {
    const { id } = req.body;

    console.log(id);

    if (!id) {
        return res.status(400).send({ error: "ID is required" });
    }

    UserDetails.findById(id)
        .then((result) => {
            if (!result) {
                return res.status(404).send({ error: "User not found" });
            }
            res.send(result);
        })
        .catch((error) => {
            console.error("Error finding user:", error);
            res.status(500).send({ error: "Internal server error" });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
