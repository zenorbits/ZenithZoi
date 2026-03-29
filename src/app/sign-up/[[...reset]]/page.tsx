// src/app/sign-in/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <SignUp />
        </main>
    );
}