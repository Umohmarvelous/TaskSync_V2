"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3 } from "lucide-react"

export function HomeContent() {
    return (
        <div className="p-6 space-y-8 min-h-screen bg-gray-50">
            {/* Welcome Section */}
            <div className="flex items-center space-x-4 mb-8">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold">Jane Smith</h1>
                    <p className="text-gray-600">Freelancer</p>
                </div>
            </div>

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome</h2>
                    <h3 className="text-xl font-semibold mb-2">To TaskSyn</h3>
                    <p className="text-gray-600">Simplifying task, enhancing productivity</p>
                </div>
                <div className="hidden md:block">
                    <div className="w-48 h-32 bg-gradient-to-br from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <BarChart3 className="w-8 h-8 text-blue-500" />
                            </div>
                            <p className="text-xs text-gray-600">Workspace</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        title: "Create Profile",
                        description: "Set up your profile to personalize your workspace",
                        bg: "bg-blue-50 border-blue-200",
                    },
                    {
                        title: "Add your Team mates",
                        description: "Invite your team to start collaborating seamlessly",
                        bg: "border-2 border-gray-300",
                    },
                    {
                        title: "Set milestones and goals",
                        description: "Define your goals and milestones to track progress effortlessly",
                        bg: "bg-purple-50 border-purple-200",
                    },
                ].map((card, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-slow"></div>
                        <Card className={card.bg}>
                            <CardHeader>
                                <CardTitle className="text-lg">{card.title}</CardTitle>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </CardHeader>
                            <CardContent>
                                <Button className="bg-slate-800 hover:bg-slate-700 text-white">Add members</Button>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Workspace Overview */}
            <div className="space-y-6 pb-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">My workspace</h2>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                        View All <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Landing page", priority: "High", color: "bg-yellow-100 text-yellow-800" },
                        { title: "CPM", priority: "Low", color: "bg-green-100 text-green-800" },
                        { title: "Landing page", priority: "Middle", color: "bg-orange-100 text-orange-800" },
                    ].map((project, index) => (
                        <Card key={index} className="bg-blue-50">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-gray-600">22 Sep 2022</p>
                                        <h3 className="font-semibold">{project.title}</h3>
                                        <p className="text-sm text-gray-600">In progress</p>
                                    </div>
                                    <Badge variant="secondary" className={project.color}>
                                        {project.priority}
                                    </Badge>
                                </div>
                                <div className="flex -space-x-2">
                                    <Avatar className="w-6 h-6 border-2 border-white">
                                        <AvatarFallback className="text-xs">JS</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="w-6 h-6 border-2 border-white">
                                        <AvatarFallback className="text-xs">AB</AvatarFallback>
                                    </Avatar>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* My Task Section */}
            <div className="space-y-6 pb-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">My Task</h2>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                        View All <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                            <Avatar className="w-8 h-8">
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium">CPM 1</span>
                                    <span className="text-sm text-gray-500">Add menu ✏️</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">Restaurant Profile</div>
                            <Badge variant="outline">To Do</Badge>
                            <Badge className="bg-red-100 text-red-800">High</Badge>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
