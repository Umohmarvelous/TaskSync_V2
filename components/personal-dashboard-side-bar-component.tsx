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
    PlusSquare,
    Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"


const navigation = [
    { name: "Home", href: "/personalDashboard/homePage", icon: Home },
    { name: "My Tasks", href: "/personalDashboard/myTaskPage", icon: CheckSquare },
    { name: "Add Project", href: "/personalDashboard/addprojectPage", icon: Workflow },
    { name: "Add Tasks", href: "/personalDashboard/addTaskPage", icon: PlusSquare },
    { name: "Task Summary", href: "/personalDashboard/taskSummaryPage", icon: FileText },
    { name: "Active Task", href: "/personalDashboard/activeTaskPage", icon: Activity },
    { name: "Documentation", href: "/personalDashboard/documentationPage", icon: FileText },
    { name: "Report", href: "/personalDashboard/reportPage", icon: BarChart3 },
    { name: "Calendar", href: "/personalDashboard/calendarPage", icon: Calendar },
    { name: "Import", href: "/personalDashboard/importPage", icon: Download },
    { name: "Trash", href: "/personalDashboard/trashPage", icon: Trash2 },
]
// const dropdownNavigation = [
//     { name: "My Tasks", high: "high", medium: "medium", low: "low", href: "/personalDashboard/myTaskPage", icon: CheckSquare },

// ]


export function PersonalSidebar() {
    const pathname = usePathname()

    return (
        <div className="fixed left-0 top-0 z-40 flex flex-col w-3xs sm:h-[3000px] sm:space-y-7 lg:w-64 min-h-full justify-between md:space-y-0 md:justify-around md:h-auto bg-slate-800 text-white">
            <div className="flex items-center h-16 px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">TaskSync</h1>
            </div>

            <nav className="flex px-6 pl-3 py-2 pb-0 flex-col space-y-1">
                {/* {dropdownNavigation.map((dropitem) => {
                    const Icon = dropitem.icon
                    const isActive = pathname === dropitem.href
                    return (
                        <div>
                            <Select defaultValue="high">

                                <SelectTrigger>
                                    <Link
                                        key={dropitem.name}
                                        href={dropitem.href} className={cn(
                                            "h-12 border-none flex items-center px-3 py-2 text-[12px] font-normal rounded-md transition-colors",
                                            isActive ? "bg-slate-700 text-red-400" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                                            // item.name === "Home" && "text-red-400 hover:text-red-300",
                                        )}
                                    >
                                        <Icon className="w-4 h-4 mr-3" />
                                        <SelectValue />
                                    </Link>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">{dropitem.high}</SelectItem>
                                    <SelectItem value="medium">{dropitem.medium}</SelectItem>
                                    <SelectItem value="low">{dropitem.low}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )
                })} */}
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
