import User from "@/models/User";
import { userSchema } from "@/schema/userSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const body = await req.json();

        const parsed = userSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.format() },
                { status: 400 }
            )
        }

        const newUser = await User.create(parsed.data);

        return NextResponse.json(
            newUser, { status: 201 }
        )
    } catch (e) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

}