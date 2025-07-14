"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "@mui/icons-material"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function SignupFirstScreen() {
    const router = useRouter();
    const pathname = usePathname();
    const showBackButton = pathname !== "/"

    const formSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Simple password match validation

        router.push('/onBoardingScreens/teamsignupScreen/signup02')
    }


    return (
        <div className="min-h-screen flex">
            <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center p-12">
                <div className="text-white max-w-md">
                    <h1 className="text-5xl font-light italic mb-8">
                        Enter the
                        <br />
                        Future
                    </h1>
                    <p className="text-xl opacity-90">of task management today</p>
                </div>
            </div>

            <div className="flex-1 bg-white flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    {showBackButton && (
                        <Button onClick={() => router.back()}
                            variant={"link"}
                            className="my-6 cursor-pointer"
                        >
                            <ChevronLeft className="bg-orange-500 hover:bg-orange-600 rounded-xl text-2xl text-white p-0" />
                        </Button>
                    )
                    }
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Welcome to Tasksync</h2>
                        <p>Get started with strealined task management - sign up and take control of your projects today."</p>
                    </div>

                    <form className="space-y-4 w-80 flex items-center justify-self-center flex-col" onSubmit={formSubmit}>
                        <div className="w-full space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" className="mt-1" />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" className="mt-1" />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="company">Company name</Label>
                            <Input id="company" className="mt-1" />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="purpose">Purpose</Label>
                            <Input id="purpose" className="mt-1" />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-8">
                            Next
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
