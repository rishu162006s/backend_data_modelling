import mongoose from "mongoose"
import dotenv from "dotenv"
import {DB_NAME} from "./constants.js"
/*( async () => {
    try{
      await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("error while connecting to db")
        })
        app.listen(process.env.PORT,() => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("error",error)
        throw error
    }
}
)*/
import connectDB from "./db/index.js"
dotenv.config()

connectDB()
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
}   )
.catch((error) => {
    console.error("error",error)
    throw error
}   )

