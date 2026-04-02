import Task from "@/models/Task";
import { taskSchema } from "@/schema/taskSchema";
import { error } from "console";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
    try {
        const body = await req.json();

        const parsed = taskSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.format() },
                { status: 400 }
            )
        }

        const newTask = await Task.create(parsed.data);
        return NextResponse.json(newTask, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });

    }
}

