import "reflect-metadata";
import express, {NextFunction, Request, Response} from "express";
import "express-async-errors";

import { router } from "./routers/routers";

const app = express();

app.use(express.json());

import "./database";

app.use(router);

// Middleware of Errors -- important pass after routers
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
        response.status(400).json({
            error: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

app.listen(3000, () => console.log(`Server is running on port: 3000`));

