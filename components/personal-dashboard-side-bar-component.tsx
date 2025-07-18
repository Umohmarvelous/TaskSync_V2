"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
    ChevronDown,
    ChevronRight,
    Plus,
    PenLineIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/personalDashboard/homePage", icon: Home },
    {
        name: "My Tasks",
        href: null, // No href since it's just a dropdown header
        icon: PenLineIcon,
        hasDropdown: true,
        subItems: [
            { name: "View all Task", href: "/personalDashboard/myTaskPage", icon: CheckSquare },
            // { name: "Add Tasks", href: "/personalDashboard/addTaskPage", icon: PlusSquare },
            { name: "Create New Project", href: "/personalDashboard/addprojectPage", icon: Workflow },
        ]
    },
    { name: "Task Summary", href: "/personalDashboard/taskSummaryPage", icon: FileText },
    { name: "Active Task", href: "/personalDashboard/activeTaskPage", icon: Activity },
    { name: "Documentation", href: "/personalDashboard/documentationPage", icon: FileText },
    { name: "Report", href: "/personalDashboard/reportPage", icon: BarChart3 },
    { name: "Calendar", href: "/personalDashboard/calendarPage", icon: Calendar },
    { name: "Import", href: "/personalDashboard/importPage", icon: Download },
    { name: "Trash", href: "/personalDashboard/trashPage", icon: Trash2 },
]

export default function PersonalSidebar() {
    const pathname = usePathname()
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    const toggleDropdown = (itemName: string) => {
        setExpandedItems(prev =>
            prev.includes(itemName)
                ? prev.filter(name => name !== itemName)
                : [...prev, itemName]
        )
    }

    const isDropdownExpanded = (itemName: string) => expandedItems.includes(itemName)

    return (
        <div className="fixed left-0 top-0 z-40 flex flex-col w-3xs sm:h-[3000px] sm:space-y-7 lg:w-64 min-h-full justify-between md:space-y-0 md:justify-around md:h-auto bg-slate-800 text-white">
            <div className="flex items-center h-16 px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">TaskSync</h1>
            </div>

            <nav className="flex px-6 pl-3 py-2 pb-0 flex-col space-y-1">
                {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    const hasDropdown = item.hasDropdown
                    const isExpanded = hasDropdown ? isDropdownExpanded(item.name) : false

                    return (
                        <div key={item.name}>
                            <div className="flex items-center">
                                {item.href ? (
                        <Link
                            href={item.href}
                            className={cn(
                                            "flex items-center px-3 py-2 text-[12px] font-normal rounded-md transition-colors flex-1",
                                isActive ? "bg-slate-700 text-red-400" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                            )}>
                            <Icon className="w-4 h-4 mr-3" />
                            {item.name}
                        </Link>
                                ) : (
                                    <div className="flex items-center px-3 py-2 text-[12px] font-normal text-slate-300 flex-1 cursor-pointer">
                                        <Icon className="w-4 h-4 mr-3" />
                                        {item.name}
                                    </div>
                                )}
                                {hasDropdown && (
                                    <button
                                        onClick={() => toggleDropdown(item.name)}
                                        className="p-1 text-slate-300 hover:text-white"
                                    >
                                        {isExpanded ? (
                                            <ChevronDown className="w-4 h-4" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4" />
                                        )}
                                    </button>
                                )}
                            </div>

                            {hasDropdown && isExpanded && item.subItems && (
                                <div className="ml-6 mt-1 bg-gray-300 p-2 rounded-md flex flex-col justify-between space-y-5 items-start">
                                    <div className="text-xs font-medium text-black mb-5 p-4 pl-2">
                                        <h2>
                                            Recent
                                        </h2>
                                    </div>
                                    <div className="space-y-2">
                                        {item.subItems.map((subItem) => {
                                            const SubIcon = subItem.icon
                                            const isSubActive = pathname === subItem.href
                                            const isCreateProject = subItem.name === "Create New Project"
                                            const isViewAllTask = subItem.name === "View all Task"

                                            return (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={cn(
                                                        "flex items-center px-2 py-2 text-[11px] font-normal rounded-md  transition-colors",
                                                        isCreateProject
                                                            ? "w-35 border-none bg-slate-400 hover:bg-slate-500 text-black font-medium shadow-sm"
                                                            : isViewAllTask
                                                                ? "w-45 border-none bg-gray-400 hover:bg-gray-500 text-black font-medium shadow-sm"
                                                                : isSubActive
                                                                    ? "bg-slate-700 text-red-400"
                                                                    : "text-slate-300 hover:bg-slate-700 hover:text-black",
                                                    )}>
                                                    {isCreateProject ? (
                                                        <>
                                                            <Plus className="w-3 h- 3 mr-3" />
                                                            {subItem.name}
                                                        </>
                                                    ) : isViewAllTask ? (
                                                        <>
                                                            {subItem.name}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <SubIcon className="w-3 h-3 mr-3" />
                                                            {subItem.name}
                                                        </>
                                                    )}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
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
