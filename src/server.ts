import "reflect-metadata";
import express from "express";
import { router } from "./routers/routers";

const app = express();

app.use(express.json());

import "./database";

app.use(router);

app.listen(3000, () => console.log(`Server is running on port: 3000`));

