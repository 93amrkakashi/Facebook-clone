const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./graphSchema/schema");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use((req, res, next) => {
  next();
});
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// listening for requests
// app.listen(process.env.PORT, () => {
//   console.log(`server started at port ${process.env.PORT} now`);
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(`server started at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(process.env.PORT)
    console.log(process.env.MONGO_URI)
    console.log(err);
    console.log("Not connected to DB");
  });
