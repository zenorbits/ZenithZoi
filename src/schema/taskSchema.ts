import z from "zod";


export const taskSchema = z.object({
    userId:z.string(),
    title:z.string().min(1,"Title is required"),
    description:z.string().optional(),
    completed:z.boolean().default(false),
    createdAt:z.date().default(()=>new Date()),
    duedate:z.date().optional(),
    tags:z.array(z.string()).optional()
});

export type TaskSchema = z.infer<typeof taskSchema>