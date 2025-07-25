"use client"
import { Button } from "@/components/ui/button"
import Header from "./header"
import { usePathname, useRouter } from "next/navigation"


export default function ErrorPage() {
    const router = useRouter()

    const pathname = usePathname()
    const showBackButton = pathname !== "/"

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-88px)] p-8">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900">Sorry, Try Again</h1>
                    <p className="text-gray-600">
                        The username or password entered
                        <br />
                        DOES NOT match!
                    </p>
                    {showBackButton && (

                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                            onClick={() => router.back()}
                        >
                            {"< Back to Login"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
