import mongoose from "mongoose";

const Connection = async(username,password) =>{
const URL = `mongodb+srv://${username}:${password}@inshort.xkypciw.mongodb.net/?retryWrites=true&w=majority&appName=Inshort`;

    try{
        await mongoose.connect(URL,{});
        console.log('database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;
