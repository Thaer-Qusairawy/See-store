import express from "express";
import db from "./config/database.js";
import cors from "cors";
import  SiteRouter from "./routes/site-routes.js";
import productRoutes from "./routes/product-routes.js";
import  UserRoutes from "./routes/user-routes.js";
import { RegisterUser, UserLogIn } from "./controllers/user-controller.js";
import { configDotenv } from "dotenv";



const port = process.env.PORT || 4000;
const app = express();



const allowedOrigins = [
  null,
  "http://localhost",
  "http://localhost:5502",
  "http://localhost:5500",
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "http://localhost:5000",
  "http://127.0.0.1:5000",
  "http://127.0.0.1:5502",
  "http://127.0.0.1:4000",
  "http://localhost:4000",
  "http://35.160.120.126:4000",
  "http://44.233.151.27:4000",
  "http://35.160.120.126",
  "https://35.160.120.126:4000",
  "https://see-store-3.onrender.com",
  "*",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "My CORS policy for this site does not allow access "
          // app.send("h1",msg,"</h1>")
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use("/", SiteRouter);

app.use(express.json());
app.use("/", productRoutes);
app.use("/", UserRoutes)



app.listen(4000, () =>
  console.log(`Example app listening on port ${port}!`),
);
