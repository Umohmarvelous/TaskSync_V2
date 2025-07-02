import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FacebookOutlined, Google, X } from "@mui/icons-material"

export function LoginWithTestimonial() {
    return (
        <div className="min-h-screen bg-gray-50">
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

                            <div className="relative flex items-center justify-center w-full mt-5 text-sm">
                                <hr className="w-full border-gray-500" />
                                <span className="px-2 bg-gray-50 text-gray-500 w-100 flex self-center justify-self-center">or continue with</span>
                                <hr className="w-full border-gray-500" />
                            </div>

                            <div className="flex justify-center gap-4">
                                <Button variant="outline" size="icon" className="cursor-pointer border-black rounded-full bg-transparent">
                                    <Google />
                                </Button>
                                <Button variant="outline" size="icon" className="cursor-pointer hover:bg-black rounded-full bg-black flex items-center justify-center">
                                    <FacebookOutlined style={{ fontSize: '40px', color: '#f9fafb' }} />
                                </Button>
                                <Button variant="outline" size="icon" className="cursor-pointer border-black rounded-full bg-transparent">
                                    <X className="" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
