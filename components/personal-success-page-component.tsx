import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "./header"
import Link from "next/link"

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-88px)] px-15 sm:p-8">
                <Card className="w-full max-w-md p-4 sm:p-8 text-center space-y-6">
                    <div className="mx-auto w-13 sm:w-16 h-13 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-orange-500" />
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Successful</h1>

                    <Link href="/onBoardingScreens/individualsignin" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Proceed to Login</Button>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
