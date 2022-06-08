const express = require('express');

const app = express();
// const cors = require("cors");

const notification = require("./routes/api/notification");

// app.use(express.json());
// app.use(cors());

app.use("/api/notification", notification);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Listening on port ${PORT}...`))
