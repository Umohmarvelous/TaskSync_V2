"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "./header"
import { ChromeIcon, FacebookIcon, TwitterIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy validation: you can replace with real API call
    if (email === "user@example.com" && password === "password123") {
      router.push("/trashPage");
    } else {
      router.push("/errorPage");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-88px)] p-8 pt-2">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign into Tasksync</h1>
            <p className="text-gray-600 m-4 mb-6 mt-1">
              Don't have an account?{" "}
              <a href="/onBoardingScreens/signup" className="text-gray-900 hover:underline font-medium">
                Create a free account
              </a>
            </p>
          </div>

          <form className="space-y-6 w-80 flex flex-col items-center justify-self-center" onSubmit={handleSubmit}>
            <div className="w-full">
              <Label htmlFor="email" className="mb-3">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter email to get started" className="mt-1" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="w-full">
              <Label htmlFor="password" className="mb-3">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-1" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="flex items-center justify-between w-full mt-0">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <a href="/forgotPasswordPage" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 mt-2">Sign in</button>

            {/* <hr className="border-gray-400 border-1 w-full my-2" /> */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500 border-2" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">or continue with</span>
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
  )
}
