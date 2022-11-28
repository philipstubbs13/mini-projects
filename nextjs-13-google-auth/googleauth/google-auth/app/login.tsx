"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
    // get session from nextAuth
    const { data: session } = useSession();

    // useSession uses React Context

    // If the user exists -> show a Sign Out button and their information.
    if (session) {
        return (
            <>
                <button onClick={() => signOut()} type="button" className="btn btn-primary">Sign Out of Google</button>
                {/* Pass session info to server component */}
                <UserCard user={session?.user} />
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="btn btn-primary">Sign In of Google</button>
            </>
        )
    }
    // If a user doesn't exist -> show a Sign In button
}