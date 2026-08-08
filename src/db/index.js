import mongoose from "mongoose";

import { DB_NAME} from "../constants.js";
const connectDB = async () => {
    try{
        console.log(process.env.MONGO_DB_URL);
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
      console.log(`MongoDB connected: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.error("error",error)
        process.exit(1)


    }
}
export default connectDB