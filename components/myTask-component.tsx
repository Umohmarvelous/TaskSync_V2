"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ShimmerCard from "./shimmer-card"
import MotionContainer from "./motion-component"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"

interface Task {
    id: number;
    title: string;
    description: string;
    priority: string;
    statusCategory: string;
    assignedTo: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export default function MyTasksContent() {
    const [userName, setUserName] = useState("--")
    const [loading, setLoading] = useState(true)
    const [currentDate, setCurrentDate] = useState("");
    const [tasks, setTasks] = useState<Task[]>([])

    const [openFeedbackModal, setOpenFeedbackModal] = useState(false)
    const [push, setPush] = useState(false)

    useEffect(() => {
        // Set current date on mount
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        setCurrentDate(today.toLocaleDateString(undefined, options));

        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId')
                if (!userId) {
                    setLoading(false)
                    return
                }

                // Fetch user from mySql database
                const response = await fetch(`http://localhost:3001/api/users/${userId}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch user data')
                }
                const userData: User = await response.json()
                const fullName = `${userData.firstName} ${userData.lastName}`.trim()

                if (fullName) { setUserName(fullName) }

            } catch (error) {
                console.error('Error fetching user data:', error)
                setUserName("No userss")

            } finally {
                setLoading(false)
            }
        }

        fetchUserData()

    }, [])

    const fetchTasks = async () => {
        const response = await fetch("http://localhost:3001/api/tasks")
        const data = await response.json()
        setTasks(data)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const feedbackFormSubmit = () => {
        setOpenFeedbackModal(false)
    }

   

    return (
        <div className="p-5 sm:p-6 space-y-8 min-h-screen bg-gray-50 w-full">
            {/* Header */}
            <MotionContainer className="text-center space-y-2">
                <p className="text-gray-600">{currentDate}</p>
                <h1 className="text-2xl font-bold">{`Good Morining ${userName}`}</h1>
            </MotionContainer>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-auto">
                {/* Left Column */}
                {/* My Goals */}
                <ShimmerCard shimmerIntensity="strong">
                    <Card className="w-auto h-full">
                        <CardHeader>
                            <CardTitle>My goals</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="text-gray-500">You don't have any goals yet</span>
                                <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                                    + Add goals
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </ShimmerCard>


                {/* Right Column - Personal Notepad */}
                <ShimmerCard shimmerIntensity="medium" className="">
                    <Card className="w-auto h-full pb-2">
                        <CardHeader>
                            <CardTitle>Personal notepad</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <form action="flex items-start justify-start items-start h-50">
                                <Textarea className="h-50 active:outline-0 active:border-none border-none active:boorder-none active:outline-offset-0  bg-gray-50 items-start flex justify-center rounded-lg p-4 text-gray-400 text-sm" id="text" placeholder="Start typing your notes here...now" >

                                </Textarea>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <div className="flex space-x-2 items-center">
                                <Button variant="ghost" size="icon" className="">
                                    <span className="text-lg">≡</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="">
                                    <span className="text-lg">/</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="font-bold">
                                    <span className="text-lg">B</span>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </ShimmerCard>
            </div>

            {/* Tasks Table */}
            <div className="h-full">
                {/* <ShimmerCard shimmerIntensity="strong" className="flex-1"> */}
                <Card className="h-full px-5 sm:px-5">
                    <CardHeader className="p-0">
                        <CardTitle>Tasks</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full sm:w-full flex flex-col items-center justify-between">
                                <thead className="w-full">
                                    <tr className="w-full flex flex-row border-b space-x-4">
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Task name</th>
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Status</th>
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Assigned</th>
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Due</th>
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Priority</th>
                                        <th className="w-full text-left py-2 sm:py-3 px-0 sm:px-4 font-medium text-gray-600 text-[14px] sm:text-lg">Summary</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {tasks.map((task) => (
                                        <tr key={task.id} className="border-b w-full flex flex-row space-x-4">
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4 text-[14px] sm:text-lg">{task.title}</td>
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4 text-[14px] sm:text-lg">{task.statusCategory}</td>
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4">
                                                <Badge className="bg-purple-100 text-purple-800 py-1 sm:py-2 px-1 sm:px-2 text-[14px] sm:text-lg">{task.assignedTo}</Badge>
                                            </td>
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4 text-[14px] sm:text-lg"></td>
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4">
                                                <Badge className="bg-yellow-100 text-yellow-800 py-1 sm:py-2 px-1 sm:px-2 text-[14px] sm:text-lg">{task.priority}</Badge>
                                            </td>
                                            <td className="w-full py-2 sm:py-3 px-0 sm:px-4 text-[14px] sm:text-lg overflow-x-auto">{task.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
                {/* </ShimmerCard> */}
            </div>
        </div>
    )
}
