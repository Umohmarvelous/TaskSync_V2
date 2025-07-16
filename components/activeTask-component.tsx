"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Search, MessageSquare, Share, MoreHorizontal, UserPlus2 } from "lucide-react"
import ShimmerCard from "./shimmer-card"

const taskColumns = [
    {
        title: "To Do",
        count: 3,
        tasks: [
            { id: 1, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 4", priority: "High" },
            { id: 2, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 5", priority: "High" },
            { id: 3, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 6", priority: "High" },
        ],
    },
    {
        title: "In Progress",
        count: 2,
        tasks: [
            { id: 4, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 3", priority: "High" },
            { id: 5, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 2", priority: "High" },
        ],
    },
    {
        title: "Done",
        count: 1,
        tasks: [{ id: 6, title: "Restaurant page", subtitle: "Add Menu", flow: "Task flow 1", priority: "High" }],
    },
]

export default function ActiveTaskContent() {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-col sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                <div className="space-y-2 mb-5">
                    <p className="text-gray-600">Project/ HerTechTrail (HTT)</p>
                </div>

                <div className="flex items-center space-x-6 w-full justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="search"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                            />
                        </div>
                        <div className="flex -space-x-2">
                            <Avatar className="w-8 h-8 border-2 border-white">
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-8 h-8 border-2 border-white bg-slate-800 text-white">
                                <AvatarFallback>I</AvatarFallback>
                            </Avatar>
                        </div>
                        <Button variant="outline" className="rounded-full bg-slate-400" size="sm">
                            <UserPlus2 className="w-3 h-3 " />
                        </Button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Give feedback
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Share className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Complete Task flow</Button>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {taskColumns.map((column) => (
                    <div key={column.title} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900">{column.title}</h3>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                                {column.count}
                            </Badge>
                        </div>

                        <div className="space-y-3">
                            {column.tasks.map((task) => (
                                <ShimmerCard key={task.id} shimmerIntensity="medium">
                                    <Card className="bg-blue-50 border-blue-100 cursor-pointer hover:shadow-md transition-shadow">
                                        <CardContent className="p-4">
                                            <div className="flex items-start space-x-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarFallback>JS</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 space-y-2">
                                                    <div>
                                                        <h4 className="font-medium text-sm">{task.title}</h4>
                                                        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded mt-1 inline-block">
                                                            {task.subtitle}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-600">{task.flow}</span>
                                                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">{task.priority}</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ShimmerCard>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Add Column */}
                <div className="flex items-center justify-center">
                    <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-lg border-dashed hover:scale-110 transition-transform"
                    >
                        <Plus className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
