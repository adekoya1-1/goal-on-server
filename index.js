require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
const mongoose = require("mongoose");
const cors = require('cors');
const goalRouter = require("./routes/goalrouter")

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/goal', goalRouter)
// db connection
const start = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server Listening on port ${PORT}`);
    });
  } catch (error) {
      console.log(error);
  }
};

start()

app.use((req, res) => {
  res.status(404).send("Resource Not Found");
});
