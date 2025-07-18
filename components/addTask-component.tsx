"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AddTaskContentProps {
    open: boolean;
    onClose: () => void;
    onTaskAdded: () => void | Promise<void>;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export function AddTaskContent({ open, onClose, onTaskAdded }: AddTaskContentProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [userName, setUserName] = useState("Jane S,masith");
    const [userRole, setUserRole] = useState("Freelaasncer");
    const [loading, setLoading] = useState(true);

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
                if (fullName) setUserName(fullName);

            } catch (error) {
                setUserName("Jane Smith");
                setUserRole("Freelancer");
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await fetch("http://localhost:3001/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description }),
            });
            if (!response.ok) throw new Error("Failed to add task");
            setTitle("");
            setDescription("");
            onTaskAdded();
            onClose();
        } catch (err: any) {
            setError(err.message || "Error adding task");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} className="p-6 max-w-4xl mx-auto">
            <DialogContent>
                <div className="flex items-center space-x-4 mb-8">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="/placeholder-user.jpg" alt={userName} />
                        <AvatarFallback>
                            {userName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold">{userName}</h2>
                        <p className="text-gray-600">{userRole}</p>
                    </div>
                </div>
                <form className="space-y-15" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-1 space-y-10">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg font-semibold">Title</label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    placeholder="Landing page"
                                    className="h-12 border-2 border-[#f9a488] text-black"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg font-semibold">Priority</label>
                                <Select defaultValue="high" disabled>
                                    <SelectTrigger className="h-12 border-2 border-[#f9a488]">
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
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col space-y-2">
                                <label className="text-lg font-semibold">Status Category</label>
                                <Select defaultValue="todo" disabled>
                                    <SelectTrigger className="h-12 border-2 border-[#f9a488]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="todo">To Do</SelectItem>
                                        <SelectItem value="inprogress">In Progress</SelectItem>
                                        <SelectItem value="done">Done</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                                <label className="text-lg font-semibold">Assigned To</label>
                                <Select defaultValue="david" disabled>
                                    <SelectTrigger className="h-12 border-2 border-[#f9a488]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="david">David</SelectItem>
                                        <SelectItem value="jane">Jane</SelectItem>
                                        <SelectItem value="john">John</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg font-semibold">Description</label>
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            placeholder="Lorem ipsum dolor sit amet consectetur..."
                            className="min-h-32 resize-none border-2 border-[#f9a488]"
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}