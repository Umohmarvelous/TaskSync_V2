import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "./header"
import { ChromeIcon, FacebookIcon, TwitterIcon } from "lucide-react"

export function LoginWithTestimonial() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex min-h-[calc(100vh-88px)]">
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

                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter email to get started" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" className="mt-1" />
                                <div className="text-right mt-1">
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Log in</Button>

                            <div className="text-center">
                                <span className="text-sm text-gray-600">
                                    Not a member?{" "}
                                    <a href="#" className="text-gray-900 hover:underline">
                                        Sign up
                                    </a>
                                </span>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                                    <ChromeIcon size={'15px'} />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                                    <FacebookIcon size={'15px'} />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                                    <TwitterIcon size={'15px'} />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
