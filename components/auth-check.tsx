"use client"

import { useSession } from "next-auth/react"
import { LogoutButton } from "./logout-button"

export function AuthCheck() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "unauthenticated") {
        return <div>Not authenticated</div>
    }

    return (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <h3 className="text-green-800 font-semibold">Authenticated!</h3>
            <p className="text-green-700">Welcome, {session?.user?.name || session?.user?.email}</p>
            <LogoutButton />
        </div>
    )
} 