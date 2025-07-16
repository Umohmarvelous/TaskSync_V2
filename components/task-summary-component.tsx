"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
    Search,
    Users,
    MessageSquare,
    Upload,
    MoreHorizontal,
    ChevronDown,
    Plus,
    Calendar,
    ChevronUp,
    Share2,
    UserPlus2,
} from "lucide-react"
import ShimmerCard from "./shimmer-card"
import MotionContainer from "./motion-component"
import { useEffect, useRef, useState } from "react"
import AddTaskContent from "@/app/personalDashboard/addTaskPage/page"

interface Task {
    id: string;
    title: string;
    description: string;
    // Add other fields if needed
}

export default function TaskSummaryContent() {
    const [isTaskFlowExpanded, setIsTaskFlowExpanded] = useState(true)
    const [isSubtaskExpanded, setIsSubtaskExpanded] = useState(true)
    const [tasks, setTasks] = useState<Task[]>([])
    const [addModalOpen, setAddModalOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:3000/tasks");
            if (!response.ok) throw new Error("Failed to fetch tasks");
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            // Optionally handle error
        }
    }

    useEffect(() => {
        fetchTasks();
        inputRef.current?.focus()
    }, [])

    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50">
            {/* Header */}
            <MotionContainer>
                <div className="space-y-4">
                    <p className="text-gray-600">Project/ HerTechTrail</p>

                    {/* Action Bar */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input ref={inputRef} placeholder="Search" className="pl-10 w-64" />
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
                            <Button variant="outline" size="sm">
                                Status Category
                                <ChevronDown className="w-3 h-3 ml-1" />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Give feedback
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Upload className="w-4 h-4 mr-2" />
                                Export
                            </Button>
                            <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </MotionContainer>



            {/* CPM Task Flow Section */}
            <ShimmerCard shimmerIntensity="light">
                <div className="bg-blue-100 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsTaskFlowExpanded(!isTaskFlowExpanded)}
                                className="w-6 h-6"
                            >
                                {isTaskFlowExpanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronUp className="w-4 h-4" />}
                            </Button>
                            <h3 className="font-medium text-gray-500">CPM Task Flow 1</h3>
                            <Button variant="ghost" size="sm" className="text-gray-400">
                                <Calendar className="w-4 h-4 mr-1" />
                                Add Date
                            </Button>
                            <span className="text-sm text-gray-400">( 0 issues )</span>
                        </div>
                        <Button className="bg-blue-200 text-gray-600 hover:bg-blue-300">Start Task flow</Button>
                    </div>

                    {isTaskFlowExpanded && (
                        <div className="border-2 border-dashed border-gray-400 rounded-2xl p-12 text-center">
                            <div className="space-y-4">
                                <h4 className="font-medium text-lg text-gray-400">
                                    Plan your <span className="font-bold text-gray-600">task flow</span>
                                </h4>
                                <p className="text-gray-600 text-center">
                                    Drag issues from <span className="font-medium">backlog</span> section, or create new issues to plan
                                    the work for this task flow.
                                </p>
                                <p className="text-gray-500">Select start Task Flow</p>
                            </div>
                        </div>
                    )}

                    <div className="mt-6">
                        <Button className="bg-slate-800 hover:bg-slate-700 text-white" onClick={() => setAddModalOpen(true)}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Task
                        </Button>
                    </div>
                </div>
            </ShimmerCard>

            {/* Subtask Summary Section */}
            <ShimmerCard shimmerIntensity="medium">
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSubtaskExpanded(!isSubtaskExpanded)}
                                className="w-6 h-6"
                            >
                                {isSubtaskExpanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronUp className="w-4 h-4" />}
                            </Button>
                            <h3 className="font-medium text-gray-500">Subtask summary</h3>
                            <span className="text-sm text-gray-400">(1 issues)</span>
                        </div>
                        <Button className="bg-blue-200 text-gray-600 hover:bg-blue-300">Create Task flow</Button>
                    </div>

                    {isSubtaskExpanded && (
                        <div className="space-y-4">
                            {tasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <div className="flex-1 flex items-center space-x-4">
                                        <span className="font-medium">{task.id}</span>
                                        <span className="text-gray-700">{task.title}</span>
                                    </div>
                                    <Badge className="bg-slate-800 text-white mr-40">Profile</Badge>
                                    <Badge variant="outline" className="border-gray-300">
                                        To Do
                                        <ChevronDown className="w-3 h-3 ml-1" />
                                    </Badge>
                                    <Button variant="ghost" size="icon" className="w-6 h-6">
                                        <span className="text-gray-400">⭐</span>
                                    </Button>
                                    <Badge className="bg-red-100 text-red-800">High</Badge>
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button className="bg-slate-800 hover:bg-slate-700 text-white" onClick={() => setAddModalOpen(true)}>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Task
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </ShimmerCard>
            <AddTaskContent open={addModalOpen} onClose={() => setAddModalOpen(false)} onTaskAdded={fetchTasks} />
        </div>
    )
}
