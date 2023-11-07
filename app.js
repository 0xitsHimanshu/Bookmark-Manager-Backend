import Express  from "express";
import bookmarkRouter from "./routes/bookmarkRoutes.js"
import userRouter from "./routes/userRoutes.js"
import { config } from "dotenv";

const app = Express();

//using middlewares 
app.use(Express.json())

//using config middleware for env file
config({
    path:"./data/config.env",
})

//using routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/bookmark", bookmarkRouter);

app.get("/", (req, res, next) => {
    res.send("Bookmark manager API");
})

export default app;