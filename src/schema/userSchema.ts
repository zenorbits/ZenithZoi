import z from "zod";


export const userSchema = z.object({
    clerkId:z.string(),
    name:z.string().min(1,"Name is required"),
    email:z.string().email("Invalid email format"),
    preferences:z.object({
        theme:z.string().optional()
    }).optional()
});

export type UserSchema = z.infer<typeof userSchema>;