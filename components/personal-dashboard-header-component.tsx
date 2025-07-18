"use client"

import { Search, Bell, Plus, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"

interface User {
    id: number;
    firstName: string;
    lastName: string;
    company?: string;
    purpose?: string;
}

export default function PersonalDashboardHeader() {
    const pathname = usePathname()
    const router = useRouter()
    const showBackButton = pathname !== "/"
    const [userName, setUserName] = useState("Jane Smith")
    const [userRole, setUserRole] = useState("Freelancer")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user ID from localStorage
                const userId = localStorage.getItem('userId')
                if (!userId) {
                    setLoading(false)
                    return
                }

                // Fetch user data from backend (MySQL)
                const response = await fetch(`http://localhost:3001/api/users/${userId}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch user data')
                }

                const userData: User = await response.json()
                const fullName = `${userData.firstName} ${userData.lastName}`.trim()

                if (fullName) {
                    setUserName(fullName)
                }
                if (userData.company) {
                    setUserRole(userData.company)
                }
            } catch (error) {
                console.error('Error fetching user data:', error)
                // Fallback to default values
                setUserName("Jane Smith")
                setUserRole("Freelancer")
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [])

    return (
        <header
            className="fixed top-0 right-0 z-30 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200"
            style={{ width: "calc(100% - 16rem)" }}
        >
            <div className="flex items-center space-x-4">
                {showBackButton && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.back()}
                        className="rounded-full bg-slate-800 text-white hover:bg-slate-700"
                        name="button" title="Back to Home"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                )}
                <div className="relative flex-1 max-w-md w-2xl">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input type="search" placeholder="Search" id="search" className="pl-10 bg-gray-50 border-gray-200 rounded-full" />
                </div>
            </div>

            <Link href="#" >
                <Bell className="w-5 h-5" />
            </Link>

            <Link
                href="/personalDashboard/addTaskPage"
                className="flex flex-row items-center rounded-xl p-2 bg-slate-800 hover:bg-slate-700 text-white">
                <Plus className="w-4 h-4 mr-2" />

                Add Task
            </Link>

            <div className="flex items-center space-x-3">
                <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                    <AvatarFallback>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-gray-500">{userRole}</p>
                </div>
            </div>
        </header>
    )
} 