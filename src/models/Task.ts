import mongoose, { Schema, Document } from "mongoose";


export interface ITask extends Document {
    userId: string,
    title: string,
    description?: string,
    completed: boolean,
    createdAt?: Date,
    duedate?: Date,
    tags?:string[]
}

const TaskSchema = new Schema<ITask>({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    duedate: {
        type: Date,
        default: Date.now()
    },
    tags:{
        type:[{type:String}]
    }
})

export default mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);