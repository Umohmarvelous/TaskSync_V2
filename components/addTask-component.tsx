"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function AddTaskContent() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* User Info */}
            <div className="flex items-center space-x-4 mb-8">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-semibold">Jane Smith</h2>
                    <p className="text-gray-600">Freelancer</p>
                </div>
            </div>

            {/* Form */}
            <div className="space-y-15">
                <div className="grid grid-cols-1 lg:grid-cols-1 space-y-10">
                    <div className="flex justify-between items-center">
                        {/* Title */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Title</label>
                            <Input placeholder="Landing page" className="h-12 border-2 border-[#f9a488] text-black" />
                        </div>

                        {/* Priority */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Priority</label>
                            <Select defaultValue="high">
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
                        {/* Status Category */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-lg font-semibold">Status Category</label>
                            <Select defaultValue="todo">
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

                        {/* Assigned To */}
                        <div className="flex flex-col items-end space-y-2">
                            <label className="text-lg font-semibold">Assigned To</label>
                            <Select defaultValue="david">
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

                {/* Description */}
                <div className="flex flex-col space-y-2">
                    <label className="text-lg font-semibold">Description</label>
                    <Textarea
                        placeholder="Lorem ipsum dolor sit amet consectetur. Sed elementum id purus nisl at ac nisl in. Faucibus scelerisque in amet ac. Et tristique velit mus egestas purus justo libero sit congue. Hendrerit aliquam morbi magna vel quam volutpat elementum sed neque. Elementum sollicitudin vitae quis elit ultrices dictum. Ut id augue molestudae pulvinar."
                        className="min-h-32 resize-none border-2 border-[#f9a488]"
                    />
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg">Save</Button>
                </div>
            </div>
        </div>
    )
}
