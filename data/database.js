import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export const ConnectToDatabase = () => {
    mongoose.connect(mongoURI)
    .then(console.log("***** Connected to Database successfully *****"))
    .catch((e)=>console.log(e))
}
