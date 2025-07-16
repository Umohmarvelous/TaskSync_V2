"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SigninOptions from "./other-signin-options-component"

export default function TeamSignin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Dummy validation: you can replace with real API call
        if (email === "user@example.com" && password === "password123") {
            router.push("/teamDashboard/homePage");
        } else {
            router.push("/errorPage");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex min-h-screen">
                {/* Left side - Testimonial */}
                <div className="flex-1 relative">
                    <Image src="/images/login-testimonial.png" alt="Team working" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="text-lg mb-6">
                            Our team has been working on tasksync for amost 2 months because our office still closed. It's been an
                            AWESOME! experience for me. Thank you Tasksync and Team.
                        </p>
                        <div>
                            <p className="font-semibold">Pedro Ibanez</p>
                            <p className="text-sm opacity-90">UI Designer at Perxels</p>
                        </div>
                    </div>
                </div>

                {/* Right side - Login form */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome back please enter your details</h1>
                        </div>

                        <form className="space-y-7" onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter email" required className="mt-3" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" required className="mt-3" value={password} onChange={e => setPassword(e.target.value)} />
                                <div className="text-right mt-1">
                                    <Link href="/forgotPasswordPage" className="text-sm text-gray-500 hover:text-gray-700">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">Log in</Button>

                                <div className="text-left">
                                    <span className="text-sm text-gray-600">
                                        Not a member?{" "}
                                        <a href="/onBoardingScreens/teamsignupScreen/signup01" className="text-gray-900 font-bold hover:underline">
                                            Sign up
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <SigninOptions />
                    </div>
                </div>
            </div>
        </div>
    )
}
