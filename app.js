import express from "express";
import bodyParser from "body-parser";

import routes from './src/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
