"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "./header"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FacebookOutlined, FacebookTwoTone, Google, X } from "@mui/icons-material"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy validation: you can replace with real API call
    if (email === "user@example.com" && password === "password123") {
      router.push("/dashboardPage/dashboardHomePage");
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
              <Input id="email" type="email" placeholder="Enter email" required className="mt-1" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="w-full">
              <Label htmlFor="password" className="mb-3">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required className="mt-1" value={password} onChange={e => setPassword(e.target.value)} />
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

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2">Sign in</button>

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
