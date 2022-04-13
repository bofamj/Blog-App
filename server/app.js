require("dotenv").config();
const express = require("express");
const app = express();
const autheRouter = require("./routes/auth");
const blogRouter = require("./routes/blog");
const authentication = require("./middleware/authentication");
const cors = require("cors");
const path = require("path");
//* connect to the connectDB
const connectDB = require("./db/connect");

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", autheRouter);
app.use("/api/v1/blogs", authentication, blogRouter);

//! server static assets if in production NPM_CONFIG_PRODUCTION
/* if (process.env.NODE_ENV === "production") {
  //*set static folder
  app.use(express.static("client/build"));

  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} */
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
const port = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
