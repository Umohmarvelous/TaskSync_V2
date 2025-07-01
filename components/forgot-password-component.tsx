import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Header } from "./header"

export function ForgotPassword() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex items-center justify-center min-h-[calc(100vh-88px)] p-8">
                <Card className="w-full max-w-md p-8 space-y-6">
                    <div className="text-center">
                        <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-orange-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                        <p className="text-gray-600">No worries we'll send you reset instructions</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="example@gmail.com" className="mt-1" />
                        </div>

                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>

                        <div className="text-center">
                            <a href="/onBoardingScreens/signin" className="text-sm text-gray-600 hover:text-gray-900">
                                {"< Back to Login"}
                            </a>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}
