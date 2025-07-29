"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"


export default function AddProjectLayout() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()


    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const response = await fetch("http://localhost:3001/api/"), {
            method:POST,
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({

            })
        }

    }



    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                {/* Form */}
                <form className="space-y-8" onSubmit={formSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-1 space-y-10">
                        <div className="flex items-center justify-between">
                            {/* Title */}
                            <div className="flex flex-col space-y-3">
                                <label className="text-lg font-semibold">Project Name</label>
                                <Input placeholder="Landing page" className=" border-2 border-[#f9a488] h-12 text-gray-500" defaultValue="Landing page" />
                            </div>
                            {/* Acronym */}
                            <div className="flex flex-col space-y-3">
                                <label className="text-lg font-semibold">Acronym</label>
                                <Input placeholder="Landing page" className=" border-2 border-[#f9a488] h-12 text-gray-500" defaultValue="Lp" />
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-lg font-semibold">Project Description</label>
                            <Textarea
                                placeholder="Lorem ipsum dolor sit amet consectetur..."
                                className="min-h-32 resize-none border-2 border-[#f9a488]"
                                defaultValue="Lorem ipsum dolor sit amet consectetur. Sed elementum id purus nisl at ac nisl in. Faucibus scelerisque in amet ac. Et tristique velit mus egestas purus justo libero sit congue. Hendrerit aliquam morbi magna vel quam volutpat elementum sed neque. Elementum sollicitudin vitae quis elit ultrices dictum. Ut id augue molestudae pulvinar."
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            {/* Project Visibility */}
                            <div className="flex flex-col space-y-3">
                                <label className="text-lg font-semibold">Project Visibility</label>
                                <Select defaultValue="Public">
                                    <SelectTrigger className="h-12 border-2 border-[#f9a488]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Private">Private</SelectItem>
                                        <SelectItem value="Only team members">Only team members</SelectItem>
                                        <SelectItem value="Public">Public</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Project Type */}
                            <div className="flex flex-col space-y-3">
                                <label className="text-lg font-semibold">Project Type</label>
                                <Select defaultValue="My Kanban Project">
                                    <SelectTrigger className="h-12 border-2 border-[#f9a488]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="My Scrum Project">My Scrum Project</SelectItem>
                                        <SelectItem value="My Kanban Project">My Kanban Project</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>


                    {/* Create Project */}
                    <div className="flex justify-end mt-10 mb-6">
                        <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-5 text-lg">Create Project</Button>
                    </div>
                </form>
            </div>
        </>
    )
}