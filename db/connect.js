// const connectionString = 'mongodb+srv://sujeetjaiswar59:<password>@cluster0.fiwadbc.mongodb.net/?retryWrites=true&w=majority'
import mongoose from "mongoose";

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB