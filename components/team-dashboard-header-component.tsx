"use client"

import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

export default function TeamDashboardHeader() {
    const pathname = usePathname()

    return (
        <header className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 max-w-lg">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search" className="pl-10 bg-gray-50 border-gray-200 rounded-full h-10" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5 text-gray-600" />
                    </Button>
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback className="bg-gray-300">JS</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                            <div className="font-semibold text-gray-900">No user</div>
                            <div className="text-gray-500">Freelancer</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 