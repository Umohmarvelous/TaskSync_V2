"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    CheckSquare,
    BarChart3,
    Calendar,
    Download,
    Trash2,
    LogOut,
    FileText,
    Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


const navigation = [
    { name: "Home", href: "/dashboardPage/dashboardHomePage", icon: Home },
    { name: "My Tasks", href: "/dashboardPage/myTaskPage", icon: CheckSquare },
    { name: "Task Summary", href: "/dashboardPage/taskSummaryPage", icon: FileText },
    { name: "Active Task", href: "/dashboardPage/activeTaskPage", icon: Activity },
    { name: "Documentation", href: "/dashboardPage/documentationPage", icon: FileText },
    { name: "Report", href: "/dashboardPage/reportPage", icon: BarChart3 },
    { name: "Calendar", href: "/dashboardPage/calendarPage", icon: Calendar },
    { name: "Import", href: "/dashboardPage/importPage", icon: Download },
    { name: "Trash", href: "/dashboardPage/trashPage", icon: Trash2 },
    // { name: "Settings", href: "/dashboardPage/settingsPage", icon: Settings },
    // { name: "My Workspace", href: "/dashboardPage/workspacePage", icon: FolderOpen },
]


export function Sidebar() {
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

                <Button variant="ghost" className="w-full mt-3 justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                    <LogOut className="w-5 h-5 mr-3" />
                    Log out
                </Button>
            </div>
        </div>
    )
}
