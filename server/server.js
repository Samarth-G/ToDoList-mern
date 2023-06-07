require("dotenv").config();
const express = require("express");
const todo = require("./routes/todo");
const cors = require("cors"); // allows api calls from frontend

const connectDB = require("./config/db");
const app = express();

// connect database
connectDB();

// initialize middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

// Have our app to listen to PORT using app.listen()
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});


/**
 * GET = curl http://localhost:8000/api/todo
 * POST = curl -d '{"title":"test","description":"testing"}' -H "Content-Type: application/json" -X POST http://localhost:8000/api/todo
 * PUT = curl -d '{"title":"testNew","description":"testingNew"}' -H "Content-Type: application/json" -X PUT http://localhost:8000/api/todo/id
 * DELETE = curl -X DELETE http://localhost:8000/api/todo/id
 */