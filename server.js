import app from "./app.js";
import { ConnectToDatabase } from "./data/database.js";
const port = process.env.PORT;

ConnectToDatabase();

app.listen(port,()=>{
    console.log(" ---- Server is working ----")
    console.log(`Server is running on http://localhost:${port}`);
})