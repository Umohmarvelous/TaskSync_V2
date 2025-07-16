"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Folder, Upload, ChevronDown } from "lucide-react"

const files = [
    {
        name: "Legal",
        type: "folder",
        modified: "09/2/2025 4:00PM",
        createdBy: "Mercy",
        size: "2,645KB",
        privacy: "Public",
    },
    {
        name: "Job walk",
        type: "folder",
        modified: "11/2/2025 8:30AM",
        createdBy: "Mercy",
        size: "3,742KB",
        privacy: "Private",
    },
    {
        name: "Legal",
        type: "folder",
        modified: "14/2/2025 6:20 PM",
        createdBy: "Mercy",
        size: "2,325KB",
        privacy: "Public",
    },
]

export default function DocumentationContent() {
    return (
        <div className="p-6 space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload folder
                </Button>
                <Button variant="outline">
                    <Folder className="w-4 h-4 mr-2" />
                    New folder
                </Button>
                <Button variant="outline">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Import from google
                </Button>
            </div>

            {/* Files Table */}
            <div className="bg-white rounded-lg border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Files</th>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Modified</th>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Created by</th>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Type</th>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Size</th>
                                <th className="text-left py-3 px-6 font-medium text-gray-600">Privacy</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center space-x-3">
                                            <Folder className="w-5 h-5 text-gray-400" />
                                            <span className="font-medium">{file.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">{file.modified}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="w-6 h-6">
                                                <AvatarFallback className="text-xs">M</AvatarFallback>
                                            </Avatar>
                                            <span className="text-gray-600">{file.createdBy}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">Folder</td>
                                    <td className="py-4 px-6 text-gray-600">{file.size}</td>
                                    <td className="py-4 px-6">
                                        <Badge
                                            variant={file.privacy === "Public" ? "secondary" : "outline"}
                                            className={
                                                file.privacy === "Public" ? "bg-gray-100 text-gray-800" : "border-gray-300 text-gray-600"
                                            }
                                        >
                                            {file.privacy}
                                        </Badge>
                                    </td>
                                    <td className="py-4 px-6">
                                        <Button variant="outline" size="sm">
                                            {file.privacy === "Public" ? "Rename" : file.privacy === "Private" ? "Delete" : "Make Private"}
                                            <ChevronDown className="w-3 h-3 ml-1" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
