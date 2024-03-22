import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { config } from "dotenv";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import solicitudesRoutes from "./src/routes/solicitudes.js";
import catalogosRoutes from './src/routes/catalogs.js';
import connectToDb from "./src/config/db.js";


const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

config();

const app = express();

connectToDb();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/public', express.static(join(CURRENT_DIR, "./uploads")));

app.use("/solicitudes", solicitudesRoutes);
app.use("/catalogos", catalogosRoutes);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
