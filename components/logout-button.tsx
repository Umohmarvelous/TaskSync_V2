"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
    return (
        <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="outline"
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
            Sign Out
        </Button>
    )
} 