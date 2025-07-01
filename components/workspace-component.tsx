"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { ShimmerCard } from "./shimmer-card"
import { MotionContainer } from "./motion-component"
import { useState } from "react"

const workspaceTabs = [
    { name: "Overview", active: false },
    { name: "Messages", active: true },
    { name: "Board", active: false },
]

export function WorkspaceContent() {
    const [showMessageInput, setShowMessageInput] = useState(true)
    const [activeTab, setActiveTab] = useState("Messages")

    return (
        <div className="p-6 space-y-6 min-h-screen bg-gray-50">
            {/* Header */}
            <MotionContainer>
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">My Workspace</h1>

                    {/* Tabs */}
                    <div className="flex space-x-8 border-b border-gray-200">
                        {workspaceTabs.map((tab) => (
                            <button
                                key={tab.name}
                                className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${tab.active
                                    ? "border-orange-500 text-orange-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </MotionContainer>

            {/* Message Input */}
            {showMessageInput && activeTab === "Messages" && (
                <ShimmerCard delay={0.3} shimmerIntensity="light">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-6 h-6 text-orange-600 hover:bg-orange-100"
                                    onClick={() => setShowMessageInput(false)}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                            <Input
                                placeholder="Send message to members"
                                className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-gray-600"
                            />
                        </div>
                    </div>
                </ShimmerCard>
            )}

            {/* Content Area */}
            <div
                className="flex-1 flex items-center justify-center bg-white rounded-lg border border-gray-200"
                style={{ minHeight: "calc(100vh - 300px)" }}
            >
                <div className="text-center space-y-4 p-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-medium text-gray-900">
                            {activeTab === "Messages" ? "No messages yet" : `No ${activeTab.toLowerCase()} content`}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {activeTab === "Messages"
                                ? "Start a conversation with your team members"
                                : `Your ${activeTab.toLowerCase()} content will appear here`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 