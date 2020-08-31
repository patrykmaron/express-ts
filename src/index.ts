import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
routes.register(app);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
