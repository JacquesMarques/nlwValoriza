import express, {Request, request, Response, response} from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá NLW");
});

app.post("/test", (request, response) => {
    return response.send("Olá NLW método Post");
});


app.listen(3000, () => console.log("Server is running NLW"));

