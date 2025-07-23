"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import ShimmerCard from "./shimmer-card"
import MotionContainer from "./motion-component"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Search,
    MessageSquare,
    Upload,
    MoreHorizontal,
    ChevronDown,
    Plus,
    ChevronUp,
    Share2,
    UserPlus2,
    Lock,
    Eye,
    Share,
    ThumbsUp,
    Settings,
    Calendar,
    BadgeCheckIcon,
    XIcon,
    Trash2,
} from "lucide-react"
import { Box, Modal } from "@mui/material";


const baseUrl = 'http://localhost:3001/api/tasks'

interface Task {
    id: string;
    title: string;
    description: string;
    priority: string;
    statusCategory: string;
    assignedTo: string
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    company?: string;
    purpose?: string;
}
export default function TaskSummaryContent() {

    const [userName, setUserName] = useState("No user")
    const [loading, setLoading] = useState(true)

    const [isTaskFlowExpanded, setIsTaskFlowExpanded] = useState(true)
    const [isSubtaskExpanded, setIsSubtaskExpanded] = useState(true)
    const [tasks, setTasks] = useState<Task[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
    const [shareMessage, setShareMessage] = useState("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user ID from localStorage
                const userId = localStorage.getItem('userId')
                if (!userId) {
                    setLoading(false)
                    return
                }

                // Fetch user data from backend (MySQL)
                const response = await fetch(`${baseUrl}/${userId}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch user data')
                }

                const userData: User = await response.json()
                const fullName = `${userData.firstName} ${userData.lastName}`.trim()

                if (fullName) {
                    setUserName(fullName)
                }

            } catch (error) {
                console.error('Error fetching user data:', error)
                // Fallback to default values
                setUserName("No user")
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [])

    // Fetching Tasks
    const fetchTasks = async () => {
        const response = await fetch(`${baseUrl}`);
        if (!response.ok) throw new Error("Failed to fetch tasks");
        const data = await response.json();
        setTasks(data);

    }

    useEffect(() => {
        fetchTasks();
        inputRef.current?.focus()
    }, [])

    const handleOpenProjectDetails = () => {
        setIsProjectDetailsOpen(true);
    };
    const handleCloseProjectDetails = () => {
        setIsProjectDetailsOpen(false);
    };


    // Export tasks as CSV (keep this for download)
    const handleExport = () => {
        // Instead of exporting, open file picker for import
        fileInputRef.current?.click();
    };

    // Handle file input change
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result;
            alert(`File name: ${file.name}\nFirst 100 chars: ${typeof text === 'string' ? text.slice(0, 100) : ''}`);
            // You can add your custom file processing logic here
        };
        reader.readAsText(file);
        // Reset input so same file can be selected again
        event.target.value = '';
    };

    // Share: copy current page URL to clipboard
    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setShareMessage("Link copied!");
            setTimeout(() => setShareMessage(""), 2000);
        } catch (err) {
            setShareMessage("Failed to copy link");
            setTimeout(() => setShareMessage(""), 2000);
        }
    };

    const handleDeleteTask = async (taskId: string) => {
        try {
            const response = await fetch(`${baseUrl}/${taskId}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete task');
            fetchTasks(); // Refetch tasks after delete
            // Add notification to header (use context or callback)
            // if (typeof addNotification === "function") {
            //     addNotification({
            //         id: Date.now(),
            //         message: "You deleted a task",
            //         type: "info"
            //     });
            // }
        } catch (error) {
            alert('Error deleting task');
        }
    };

    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50">
            {/* Header */}
            <MotionContainer>
                <div className="space-y-4">
                    <p className="text-gray-600">Project/ HerTechTrail</p>

                    {/* Action Bar */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div className="relative flex max-w-md w-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input type="search" placeholder="Search" id="search" className="pl-10 bg-gray-50 border-gray-200 rounded-lg" />
                            </div>

                            <div className="flex -space-x-2">
                                <Avatar className="w-8 h-8 border-2 border-white">
                                    <AvatarFallback>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
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
                            <Button variant="ghost" size="sm" onClick={handleShare}>
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleExport}>
                                <Upload className="w-4 h-4 mr-2" />
                                Export
                            </Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                multiple={false}
                                accept="*/*"
                            />
                            <Button variant="ghost" size="icon" onClick={handleOpenProjectDetails}>
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </MotionContainer>

            {shareMessage && (
                <div
                    className="fixed left-1/2 top-6 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg bg-green-500 text-white text-base font-medium transition-all duration-500 ease-in-out animate-fade-slide"
                    style={{ minWidth: '180px', textAlign: 'center' }}
                >
                    {shareMessage}
                </div>
            )}

            <Dialog open={isProjectDetailsOpen} onOpenChange={setIsProjectDetailsOpen}>
                <DialogOverlay className="bg-black opacity-80 h-full" />
                <DialogContent style={{ maxWidth: '200%' }} className="h-full max-w-200 w-200 overflow-y-scroll pt-8 m-0 border-none rounded-xl">
                    {/* Right Sidebar */}
                    <div className="w-full bg-white p-2">
                        <div className=" border-2 border-amber-500 flex items-center justify-between mb-6 pr-5">
                            <div className="flex">
                                {tasks.map((task) => (
                                    <div key={task.id} className="flex flex-row items-center">
                                        <div className="w-6 h-6  rounded-full flex items-center justify-center bg-amber-600">
                                            <BadgeCheckIcon className=" text-white " />
                                        </div>
                                        <span className="pl-2 font-normal text-sm">{`HTT-${task.id}`}
                                        </span>
                                        {/* <h6 className="px-2 font-bold">/</h6> */}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Lock className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Eye className="h-3 w-3" />
                                </Button>
                                <span className="text-sm text-gray-500 mx-1">2</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <ThumbsUp className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <Share className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <MoreHorizontal className="h-3 w-3" />
                                </Button>

                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    AT
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Add Task</h3>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#2a4a6b] text-white text-xs px-3 py-1 h-7">
                                            <Plus className="h-3 w-3 mr-1" />
                                            Add
                                        </Button>
                                        <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-7 bg-transparent">
                                            <div className="grid grid-cols-2 gap-0.5 w-3 h-3 mr-1">
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                                <div className="w-1 h-1 bg-current rounded-full"></div>
                                            </div>
                                            App
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Select defaultValue="todo">
                                    <SelectTrigger className="h-10">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="todo">To Do</SelectItem>
                                        <SelectItem value="inprogress">In Progress</SelectItem>
                                        <SelectItem value="done">Done</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2 text-gray-900">Description</h4>
                                <Textarea
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Sed elementum id purus nisl at ac nisl in. Faucibus scelerisque in amet ac. Et tristique velit mus egestas purus justo libero sit congue. Hendrerit aliquam morbi magna vel quam volutpat elementum sed neque. Elementum sollicitudin vitae quis elit ultrices dictum. Ut id augue molestue pulvinar."
                                    className="min-h-[100px] text-sm"
                                />
                            </div>

                            <div>
                                <h4 className="font-medium mb-2 text-gray-900">Acceptance Criteria</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Search and Filter</li>
                                    <li>• Hero section with picture and text</li>
                                    <li>• Footer</li>
                                    <li>• Nav bar with CTA button.</li>
                                </ul>
                            </div>

                            <Collapsible>
                                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <span className="font-medium text-gray-900">Details</span>
                                    <div className="flex items-center gap-2">
                                        <ChevronDown className="h-4 w-4 text-gray-500" />
                                        <Settings className="h-4 w-4 text-gray-500" />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-4 space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500 text-xs">Assignee</span>
                                            <div className="mt-1">
                                                <Badge variant="outline" className="text-orange-500 border-orange-500 text-xs">
                                                    Assigned To Me
                                                </Badge>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs">Project</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs">Parent</span>
                                            <div className="mt-1">
                                                <Badge className="bg-[#1e3a5f] text-white text-xs">Restaurant Profile</Badge>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs">Team</span>
                                            <p className="mt-1 text-gray-900 text-xs">None</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs">Story point</span>
                                            <p className="mt-1 text-gray-900 text-xs">5</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 text-xs">Sprint</span>
                                            <p className="mt-1 text-gray-900 text-xs">None</p>
                                        </div>
                                        <div className="col-span-2">
                                            <span className="text-gray-500 text-xs">Reporter</span>
                                            <p className="mt-1 text-gray-900 text-xs">HerTechTrail</p>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>

                            <div>
                                <h4 className="font-medium mb-2 text-gray-900">Comment:</h4>
                                <div className="bg-gray-50 rounded-lg p-4 min-h-[80px] border">{/* Comment area */}</div>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>


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
                        <Button className="bg-slate-800 hover:bg-slate-700 text-white" onClick={() => router.push("/personalDashboard/addTaskPage?modal=true")}>
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
                                    className="flex items-center justify-between space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <Avatar className="w-8 h-8 ">
                                        <AvatarFallback>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                                    </Avatar>


                                    {/*  */}
                                    <div className=" flex items-center justify-self-start justify-between space-x-2 w-full pr-20">
                                        {/*  */}
                                        <div className=" flex flex-row items-center justify-self-start">
                                            <div className="w-6 h-6  rounded-full flex items-center justify-center bg-amber-600">
                                                <BadgeCheckIcon className=" text-white " />
                                            </div>
                                            <div className="flex items-center justify-start space-x-4  ml-7 overflow-x-auto">
                                                <span className="font-normal text-sm">{`HTT-${task.id}`}</span>
                                                <span className="font-semibold text-gray-700">{task.title}</span>
                                                {/* <span className="w-40 overflow-x-auto">
                                                    <h4 className="text-black">
                                                        {task.description}
                                                    </h4>
                                                </span> */}
                                            </div>
                                        </div>
                                        <Badge className="bg-slate-800 text-white">Profile</Badge>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                            setSelectedTaskId(task.id);
                                            setConfirmDeleteOpen(true);
                                        }}
                                        aria-label="Delete task"
                                    >
                                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                                    </Button>
                                    {/*  */}
                                    < div className=" flex items-center justify-end space-x-2 w-70" >
                                        <Badge variant="outline" className="border-gray-300 ">
                                            {task.statusCategory}
                                            <ChevronDown className="w-3 h-3 ml-1" />
                                        </Badge>
                                        <Button variant="ghost" size="icon" className="w-6 h-6 ">
                                            <span className="text-gray-400">⭐</span>
                                        </Button>
                                        <Badge className="bg-red-100 text-red-800 ">{task.priority}</Badge>

                                    </div>
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button className="bg-slate-800 hover:bg-slate-700 text-white" onClick={() => router.push("/personalDashboard/addTaskPage?modal=true")}>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Task
                                </Button>
                            </div>
                        </div>
                    )
                    }
                </div >
            </ShimmerCard >

            <Modal
                open={confirmDeleteOpen}
                onClose={() => setConfirmDeleteOpen(false)}
                aria-labelledby="confirm-delete-title"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 3,
                        borderRadius: 2,
                        minWidth: 320,
                    }}
                >
                    <h2 id="confirm-delete-title" style={{ marginBottom: 16, fontWeight: 600 }}>
                        Confirm Delete
                    </h2>
                    <p>Are you sure you want to delete this task?</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 24 }}>
                        <Button variant="outline" size="sm" onClick={() => setConfirmDeleteOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="default"
                            size="sm"
                            color="error"
                            onClick={async () => {
                                if (selectedTaskId) {
                                    await handleDeleteTask(selectedTaskId);
                                    setConfirmDeleteOpen(false);
                                }
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}
