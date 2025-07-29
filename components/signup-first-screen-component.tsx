"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "@mui/icons-material"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"


export default function SignupFirstScreen() {
    const router = useRouter();
    const pathname = usePathname();
    const showBackButton = pathname !== "/"
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [purpose, setPurpose] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const formSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:3001/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    company,
                    purpose
                }),
            });

            if (!response.ok) {
                // Try to parse the error response from the backend
                let errorMsg = "Failed to create user";
                try {
                    const errorData = await response.json();
                    if (errorData && errorData.message) {
                        errorMsg = Array.isArray(errorData.message)
                            ? errorData.message.join(", ")
                            : errorData.message;
                    }
                } catch (jsonErr) {
                    // If response is not JSON, keep the default errorMsg
                }
                throw new Error(errorMsg);
            }

            const userData = await response.json();

            // Store user ID in localStorage for future reference
            localStorage.setItem('userId', userData.id.toString());

            router.push('/onBoardingScreens/individualsignupScreen/signup02')
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex">
            <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 hidden md:flex items-center justify-center p-12">
                <div className="text-white max-w-md">
                    <h1 className="text-5xl font-light italic mb-8">
                        Enter the
                        <br />
                        Future
                    </h1>
                    <p className="text-xl opacity-90">of task management today</p>
                </div>
            </div>
            {/* Right side */}
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

                    <form className="space-y-4 w-80 md:w-85 lg:w-100 max-w-md flex flex-col items-center justify-self-center" onSubmit={formSubmit}>
                        <div className="w-full space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                                id="firstName"
                                className="mt-1"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            // required
                            />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                                id="lastName"
                                className="mt-1"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="company">Company name</Label>
                            <Input
                                id="company"
                                className="mt-1"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>

                        <div className="w-full space-y-2">
                            <Label htmlFor="purpose">Purpose</Label>
                            <Input
                                id="purpose"
                                className="mt-1"
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value)}
                            />
                        </div>

                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <Button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-8"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Next"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
