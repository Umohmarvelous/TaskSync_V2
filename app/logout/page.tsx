"use client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function LogoutLayout() {
    const router = useRouter()

    const pathname = usePathname()
    const showBackButton = pathname !== "/"

    return (
        <>
            {showBackButton && (

                <Button
                    variant={"ghost"} className="w-full mt-3 justify-start text-slate-300 hover:text-white hover:bg-slate-700"
                    onClick={() => router.back()}>
                    <LogOut className="w-5 h-5 mr-3" />

                    Logout......
                </Button>
            )}
        </>
    )
}
