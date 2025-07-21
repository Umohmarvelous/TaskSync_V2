"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert } from "@mui/material"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"


interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export default function AddTaskPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("high");
    const [statusCategory, setStatusCategory] = useState("todo");
    const [assignedTo, setAssignedTo] = useState("david");


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showSuccess, setShowSuccess] = useState(false);

    const [userName, setUserName] = useState("- -");
    const [last, setLast] = useState("- -")
    const [userRole, setUserRole] = useState("Freelacncer");


    // const isModal = searchParams.get('modal') === 'true';

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    setLoading(false);
                    return;
                }
                const response = await fetch(`http://localhost:3001/api/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const userData: User = await response.json();
                const fullName = `${userData.firstName} ${userData.lastName}`.trim();

                const lastData = `${userData.lastName}`

                if (fullName) setUserName(fullName);

                if (lastData) setLast(lastData)

            } catch (error) {
                setUserName("- -");
                setUserRole("Freelancer");
                setLast("- -")
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const handleClose = () => {
        router.back(); // Go back to previous page
    };

    const handleTaskAdded = () => {
        setShowSuccess(true);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        router.back();

        const response = await fetch("http://localhost:3001/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                description,
                priority,
                statusCategory,
                assignedTo
            }),
        });

        if (response.ok) {
            setTitle("");
            setDescription("");
            setPriority("high");
            setStatusCategory("todo");
            setAssignedTo("david");
            handleTaskAdded();
        } else {
            const errorData = await response.json();
            setError(errorData.message || "Failed to add task");
        }

        setLoading(false);
    };
    // If it's a page (from sidebar), render the page version
    return (
        <div className=" max-w-4xl mx-auto">
            <div className="p-8 pt-0">
                {showSuccess && (
                    <Alert
                        severity="success"
                        onClose={() => {
                            setShowSuccess(false);
                            router.back();
                        }}
                        className="mb-4"
                    >
                        Task added successfully!
                    </Alert>
                )}
                <div className="flex items-center space-x-4 mb-8">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                        <AvatarFallback>{userName.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold">{userName}</h2>
                        <p className="text-gray-600">{userRole}</p>
                    </div>
                </div>


                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Title</label>
                            <Input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                                placeholder="Landing page"
                                className="h-12 border-2 border-[#f9a488] text-black"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Priority</label>
                            <Select value={priority} onValueChange={setPriority}>
                                <SelectTrigger className="border-2 border-[#f9a488]" style={{ height: '47px' }}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Status Category</label>
                            <Select value={statusCategory} onValueChange={setStatusCategory}>
                                <SelectTrigger className="border-2 border-[#f9a488]" style={{ height: '47px' }}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todo">To Do</SelectItem>
                                    <SelectItem value="inprogress">In Progress</SelectItem>
                                    <SelectItem value="done">Done</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Assigned To</label>
                            <Select value={assignedTo} onValueChange={setAssignedTo}>
                                <SelectTrigger className="border-2 border-[#f9a488]" style={{ height: '47px' }}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="david">{last}</SelectItem>
                                    {/* <SelectItem value="jane">Jane</SelectItem>
                                    <SelectItem value="john">John</SelectItem> */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-lg font-semibold">Description</label>
                        <Textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                            placeholder="Lorem ipsum dolor sit amet consectetur..."
                            className="min-h-32 resize-none border-2 border-[#f9a488]"
                        />
                    </div>

                    {error && <div className="text-red-500 p-3 bg-red-50 rounded-md">{error}</div>}

                    <div className="flex justify-end space-x-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            style={{ border: '0px' }}
                            className="px-8 py-3 text-lg "
                        >
                            <h3 className="text-sm font-normal">
                                Cancel
                            </h3>
                        </Button>
                        <Button
                            type="submit"
                            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 text-lg"
                            disabled={loading}
                        >
                            <h3 className="text-sm font-normal">
                                {loading ? "Saving..." : "Save"}
                            </h3>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
