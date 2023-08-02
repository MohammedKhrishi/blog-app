const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("database is successfuly connected."))
  .catch((err) => {
    console.log("Something went wrong when connecting to the database",err);
  });
