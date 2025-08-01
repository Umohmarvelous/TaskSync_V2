"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    Calendar,
    Download,
    Trash2,
    LogOut,
    Settings,
    Briefcase,
    PenLine,
    ChartColumnStacked,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import LogoutLayout from "@/app/logout/page"


const navigation = [
    { name: "Home", href: "/teamDashboard/homePage", icon: Home },
    { name: "My Workspace", href: "/teamDashboard/workspacePage", icon: Briefcase },
    { name: "My Tasks", href: "/teamDashboard/myTaskPage", icon: PenLine },
    { name: "Report", href: "/teamDashboard/reportPage", icon: ChartColumnStacked },
    { name: "Calendar", href: "/teamDashboard/calendarPage", icon: Calendar },
    { name: "Import", href: "/teamDashboard/importPage", icon: Download },
    { name: "Settings", href: "/teamDashboard/settingsPage", icon: Settings },
    { name: "Trash", href: "/teamDashboard/trashPage", icon: Trash2 },
]


export default function TeamSidebar() {
    const pathname = usePathname()

    return (
        <div className="fixed left-0 top-0 z-40 flex flex-col w-3xs sm:h-[3000px] sm:space-y-7 lg:w-64 min-h-full justify-between md:space-y-0 md:justify-around md:h-auto bg-slate-800 text-white">
            <div className="flex items-center h-16 px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">TaskSync</h1>
            </div>

            <nav className="flex px-6 pl-3 py-2 pb-0 flex-col space-y-1">
                {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-3 py-2 text-[12px] font-normal rounded-md transition-colors",
                                isActive ? "bg-slate-700 text-red-400" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                                // item.name === "Home" && "text-red-400 hover:text-red-300",
                            )}>
                            <Icon className="w-4 h-4 mr-3" />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 pt-2 border-t border-slate-700">
                <div className="bg-slate-700 rounded-2xl p-3">
                    <h3 className="font-semibold mb-1">Upgrade To Pro</h3>
                    <p className="text-xs text-slate-300 mb-3">Ready to experience the benefit of TaskSync</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Upgrade to pro</Button>
                </div>
                <div>
                    <LogoutLayout />
                </div>
            </div>
        </div>
    )
}
