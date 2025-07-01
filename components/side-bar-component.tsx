"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Home,
    FolderOpen,
    CheckSquare,
    BarChart3,
    Calendar,
    Download,
    Settings,
    Trash2,
    LogOut,
    FileText,
    Activity,
    ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"


const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "My Tasks", href: "/myTaskPage", icon: CheckSquare },
    { name: "Task Summary", href: "/taskSummaryPage", icon: FileText },
    { name: "Active Task", href: "/active-task", icon: Activity },
    { name: "Documentation", href: "/documentationPage", icon: FileText },
    { name: "Report", href: "/reportPage", icon: BarChart3 },
    { name: "Calendar", href: "/calendarPage", icon: Calendar },
    { name: "Import", href: "/importPage", icon: Download },
    { name: "Trash", href: "/trashPage", icon: Trash2 },
    { name: "Settings", href: "/settingsPage", icon: Settings },
    { name: "My Workspace", href: "/workspacePage", icon: FolderOpen },
]

// const taskNavigation = [
// ]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="fixed left-0 top-0 z-40 flex flex-col w-64 h-auto bg-slate-800 text-white">
            <div className="flex items-center h-16 px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">TaskSync</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 ">
                {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                                item.name === "Trash" && "text-red-400 hover:text-red-300",
                            )}
                        >
                            <Icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    )
                })}

                <div className="pt-4">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">My Task</div>
                    {/* {taskNavigation.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                                )}
                            >
                                <Icon className="w-5 h-5 mr-3" />
                                {item.name}
                            </Link>


                        )
                    })} */}
                </div>


                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                            Options
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            className="min-w-[220px] bg-white rounded-md p-1 shadow-md border border-gray-200"
                            sideOffset={5}
                        >
                            <DropdownMenu.Item className="flex items-center px-2 py-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                Edit
                                <span className="ml-auto text-xs text-gray-500">⌘ E</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className="flex items-center px-2 py-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                Duplicate
                                <span className="ml-auto text-xs text-gray-500">⌘ D</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
                            <DropdownMenu.Item className="flex items-center px-2 py-2 text-sm rounded-sm hover:bg-gray-100 cursor-pointer">
                                Archive
                                <span className="ml-auto text-xs text-gray-500">⌘ N</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
                            <DropdownMenu.Item className="flex items-center px-2 py-2 text-sm rounded-sm hover:bg-red-50 text-red-600 cursor-pointer">
                                Delete
                                <span className="ml-auto text-xs text-gray-500">⌘ ⌫</span>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

            </nav>

            <div className="p-4 border-t border-slate-700">
                <div className="bg-slate-700 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold mb-1">Upgrade To Pro</h3>
                    <p className="text-xs text-slate-300 mb-3">Ready to experience the benefit of TaskSync</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Upgrade to pro</Button>
                </div>

                <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700">
                    <LogOut className="w-5 h-5 mr-3" />
                    Log out
                </Button>
            </div>
        </div>
    )
}
