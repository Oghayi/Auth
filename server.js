import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config({path: "./.env"});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("Error starting server: ", error);
            process.exit(1);
        });app.listen(process.env.PORT  ||5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
}

startServer();