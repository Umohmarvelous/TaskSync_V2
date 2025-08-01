"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "./header"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FacebookOutlined, Google, X } from "@mui/icons-material"
import Link from "next/link"

export default function PersonalSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy validation: you can replace with real API call
    if (email === "user@example.com" && password === "password123") {
      router.push("/personalDashboard/homePage");
    } else {
      router.push("/errorPage");
    }
  };

  return (
    <div className="min-h-auto h-full bg-gray-50">
      <Header />
      <div className="flex items-center justify-center min-h-auto pt-5 md:pt-3 mb-7">
        <div className="w-full max-w-md space-y-6 flex items-center justify-center flex-col">
          <div className="text-center w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign into Tasksync</h1>
            <p className="text-gray-600 m-4 mb-6 mt-1">
              Don't have an account?{" "}
              <a href="/onBoardingScreens/individualsignupScreen/signup01" className="text-red-700 hover:underline font-medium">
                Create a free account
              </a>
            </p>
          </div>

          <form className="space-y-6 w-65 sm:w-75 md:w-80 flex flex-col items-center justify-self-center" onSubmit={handleSubmit}>
            <div className="w-full">
              <Label htmlFor="email" className="mb-2 font-normal">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter email" required className="mt-1" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="w-full">
              <Label htmlFor="password" className="mb-2 font-normal">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required className="mt-1" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="flex items-center justify-between w-full mt-0">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-1 border-black" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Link href="/forgotPasswordPage" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 mt-10">Sign in</button>

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
  )
}
