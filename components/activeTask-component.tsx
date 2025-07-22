"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, Search, MessageSquare, Share, MoreHorizontal, UserPlus2 } from "lucide-react"
import ShimmerCard from "./shimmer-card"
import { useEffect, useState, useRef, use } from 'react'
import Link from "next/link"
import { Modal } from "@mui/material"

const baseUrl = 'http://localhost:3001/api/users'

interface User {
    id: number;
    firstName: string;
    lastName: string;
    company?: string;
    purpose?: string;
}

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
    const [userName, setUserName] = useState("No user")
    const [loading, setLoading] = useState(true)
    // const [tasks, setTasks] = useState<Task[]>([])
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false)
    const [feedback, setFeedback] = useState("")


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId')
                if (!userId) {
                    setLoading(false)
                    return
                }

                const response = await fetch(`${baseUrl}/${userId}`)
                const userData: User = await response.json() as User
                const fullName = `${userData.firstName} ${userData.lastName}`.trim()

                if (fullName) {
                    setUserName(fullName)
                }
            } catch (error) {
                setUserName("No User")
            } finally {
                setLoading(false)
            }
        }
        fetchUserData()
    }, [])

    //     // Removed unused function stubs for setOpenFeedbackModal and setFeedback
    //     throw new Error("Function not implemented.")
    // }

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
                        <div className="flex -space-x-3">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className="text-gray-600 text-sm bg-slate-200">{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-8 h-8 border-2 border-gray-50 bg-slate-800 text-white">
                                <AvatarFallback className="text-gray-600 text-sm">I</AvatarFallback>
                            </Avatar>
                        </div>
                        <Link href="/personalDashboard/addprojectPage"
                            className="flex items-center justify-center rounded-full bg-slate-200 w-8 h-8 text-black">
                            <UserPlus2 className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setOpenFeedbackModal(true)}
                        >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Give feedback
                        </Button>
                        {/* Feedback Modal */}
                        <Modal
                            open={openFeedbackModal}
                            onClose={() => setOpenFeedbackModal(false)}
                            aria-labelledby="feedback-modal-title"
                            aria-describedby="feedback-modal-description"
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'white',
                                    padding: 24,
                                    borderRadius: 8,
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                                    minWidth: 320,
                                }}
                            >
                                <h2 id="feedback-modal-title" style={{ marginBottom: 16, fontWeight: 600 }}>
                                    Give Feedback
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Your feedback"
                                    value={feedback}
                                    onChange={e => setFeedback(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: 8,
                                        marginBottom: 16,
                                        border: '1px solid #ccc',
                                        borderRadius: 4,
                                    }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setOpenFeedbackModal(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="default"
                                        size="sm"
                                        onClick={() => {
                                            // handle feedback submit here
                                            setOpenFeedbackModal(false)
                                            setFeedback("")
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                        {/* Modal Ends Here... */}
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
                                                    <AvatarFallback className="text-gray-600 text-sm bg-slate-200">{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
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
