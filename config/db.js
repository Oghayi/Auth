import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        connectionInstance = await mongoose.connect( `${process.env.MONGO_URI}`)
        console.log(`\n MongoDB connected!! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error: ", error)
        process.exit(1)
    }
}
export default connectDB;