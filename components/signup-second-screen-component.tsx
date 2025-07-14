"use client"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { ChevronLeft } from "@mui/icons-material"

export function SignupSecondScreen() {
    const [userName, setUserName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const ShowBackButton = pathname !== '/'

    const formSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Simple password match validation
        if (password !== confirmPassword) {
            router.push('/errorPage')
            return
        } else if (!password) {
            router.push('/errorPage')
            return
        }
        // Here you would typically handle registration logic (API call, etc.)
        setUserName('')
        setMail('')
        setPassword('')
        setConfirmPassword('')
        router.push('/onBoardingScreens/teamsignupScreen/signupSuccessPage')
    }


    return (
        <div className="min-h-screen flex">
            {/* Left side - User photo */}
            <div className=" m-3 w-140 h-auto relative">
                <Image src="/user-photo.PNG" alt="User with phone" fill className="relative object-cover rounded-2xl" />
            </div>

            {/* Right side - Registration form */}
            <div className="flex-1 bg-white flex items-center justify-center p-8 pt-2 pb-0">
                <div className="w-full max-w-md space-y-6">
                    {ShowBackButton && (
                        <Button onClick={() => router.back()}
                            variant={"link"}
                            className="my-6 cursor-pointer"
                        >
                            <ChevronLeft className="bg-orange-500 hover:bg-orange-600 rounded-xl text-2xl  text-white p-0" />
                        </Button>
                    )}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Tasksync</h1>
                        <p className="text-gray-600">
                            Get started with streamlined task management—sign up and take control of your projects today.
                        </p>
                    </div>

                    <form className="space-y-4 w-100 max-w-md flex flex-col items-center justify-self-center"
                        onSubmit={formSubmit}
                    >
                        <div className="w-full">
                            <Label htmlFor="username" className="mb-2">Username</Label>
                            <Input onChange={(e) => setUserName(e.target.value)} id="username" value={userName} placeholder=" " className="mt-1" />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="email" className="mb-2">Email</Label>
                            <Input onChange={(e) => setMail(e.target.value)} id="email" type="email" value={mail} placeholder=" " className="mt-1" />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="password" className="mb-2">Password</Label>
                            <Input id="password" type="password" placeholder=" " required className="mt-1" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="confirmPassword" className="mb-2" >Confirm password</Label>
                            <Input id="confirmPassword" type="password" required className="mt-1" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="phone" className="mb-2">Phone number</Label>
                            <Input id="phone" placeholder="Enter country code first" className="mt-1" />
                        </div>

                        <div className="flex w-full items-center space-x-2">
                            <Checkbox id="terms" required className="border-black" />
                            <Label htmlFor="terms" className="text-sm font-normal">
                                I Agree to the terms & condition
                            </Label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 mt-2"
                        >
                            Create Account
                        </button>

                        {/* <Link href="/signupSuccessPage" className="w-full">
                            <Button
                                // type="submit"
                                // disabled={!userName && !mail}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                Create Account
                            </Button>
                        </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
