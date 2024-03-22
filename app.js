import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { config } from "dotenv";

import routes from "./src/routes";
import solicitudesRoutes from "./src/routes/solicitudes";
import catalogosRoutes from './src/routes/catalogs';
import connectToDb from "./src/config/db";

config();

const app = express();

connectToDb();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(routes);
app.use("/solicitudes", solicitudesRoutes);
app.use("/catalogos", catalogosRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
