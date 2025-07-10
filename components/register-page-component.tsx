"use client"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function RegistrationForm() {
    const [userName, setUserName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const formSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        // Simple password match validation
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            setIsLoading(false)
            return
        } else if (!password || password.length < 6) {
            setError('Password must be at least 6 characters long')
            setIsLoading(false)
            return
        }

        try {
            // Call the registration API
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: mail,
                    password: password,
                    name: userName,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed')
            }

            // Clear form
            setUserName('')
            setMail('')
            setPassword('')
            setConfirmPassword('')

            // Redirect to signin page
            router.push('/onBoardingScreens/signin')
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Registration failed. Please try again.')
        } finally {
            setIsLoading(false)
        }
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
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Tasksync</h1>
                        <p className="text-gray-600">
                            Get started with streamlined task management—sign up and take control of your projects today.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                            {error}
                        </div>
                    )}

                    <form className="space-y-4 w-100 max-w-md flex flex-col items-center justify-self-center"
                        onSubmit={formSubmit}
                    >
                        <div className="w-full">
                            <Label htmlFor="username" className="mb-2">Username</Label>
                            <Input
                                onChange={(e) => setUserName(e.target.value)}
                                id="username"
                                value={userName}
                                placeholder=" "
                                className="mt-1"
                                disabled={isLoading}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="email" className="mb-2">Email</Label>
                            <Input
                                onChange={(e) => setMail(e.target.value)}
                                id="email"
                                type="email"
                                value={mail}
                                placeholder=" "
                                className="mt-1"
                                disabled={isLoading}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="password" className="mb-2">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder=" "
                                required
                                className="mt-1"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="confirmPassword" className="mb-2" >Confirm password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                                className="mt-1"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="w-full">
                            <Label htmlFor="phone" className="mb-2">Phone number</Label>
                            <Input
                                id="phone"
                                placeholder="Enter country code first"
                                className="mt-1"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex w-full items-center space-x-2">
                            <Checkbox id="terms" required className="border-black" disabled={isLoading} />
                            <Label htmlFor="terms" className="text-sm font-normal">
                                I Agree to the terms & condition
                            </Label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="/onBoardingScreens/signin" className="text-orange-500 hover:underline">
                                Sign in
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
