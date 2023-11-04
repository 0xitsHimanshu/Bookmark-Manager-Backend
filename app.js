import Express  from "express";
// import userRouter from
const app = Express();

//using middlewares 
app.use(Express.json())

//using routes
// app.use("/api/v1/user", userRouter);

app.get("/", (req, res, next) => {
    res.send("Bookmark manager API");
})

export default app;