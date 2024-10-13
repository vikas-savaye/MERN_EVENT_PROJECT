import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name required!"],
        minLength:[3,"Name must contain atleast 3 characters!"]
    },
    email:{
        type:String,
        required:[true,"email required!"],
        validate:[validator.isEmail,"please provide valid email"]
    },
    subject:{
        type:String,
        required:[true,"subject required!"],
        minLength:[5,"Subject must contain atleast 3 characters!"]
    },
    message:{
        type:String,
        required:[true,"message required!"],
        minLength:[10,"Message must contain atleast 3 characters!"]
    }
})
export const Message = mongoose.model("Message",messageSchema);