import mongoose, { Document, Schema } from "mongoose"


export interface IUser extends Document{
    clerkId:string,
    name:string,
    email:string,
    preferences?:{
        theme:string,
    }
}

const UserSchema = new Schema<IUser>({
    clerkId:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    preferences:{
        theme:String
    }
})

export default mongoose.models.User || mongoose.model<IUser>("User",UserSchema);