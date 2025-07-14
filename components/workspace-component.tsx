"use client"

import { Button } from "@/components/ui/button"
import { MotionContainer } from "./motion-component"
import { useState } from "react"
import { usePathname } from "next/navigation"
import MessageLayout from "@/app/teamDashboard/workspacePage/message/page"
import OverviewLayout from "@/app/teamDashboard/workspacePage/overview/page"
import BoardLayout from "@/app/teamDashboard/workspacePage/board/page"

const workspaceTabs = [
    { name: "Overview", active: false, },
    { name: "Messages", active: false, },
    { name: "Board", active: false, },
]

export function WorkspaceContent() {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState("Overview")


    const renderTabContent = () => {
        switch (activeTab) {
            case "Overview":
                return (
                    <OverviewLayout />
                )
            case "Messages":
                return (
                    <MessageLayout />
                )
            case "Board":
                return <BoardLayout />
            default:
                return null
        }
    }

    return (
        <div className="bg-gray-50">
            <div className="px-6 pb-2 space-y-6 pb-0 m-0 bg-white">
                {/* Header */}
                <MotionContainer>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">My Workspace</h1>

                        {/* Tabs */}
                        <div className="flex space-x-8">
                            <Button
                                variant={"ghost"}
                                className={`pb-3 px-1 border-b-3 font-medium text-sm transition-colors hover:bg-transparent ${activeTab === "Overview"
                                    ? "border-orange-500 text-orange-600 rounded-none"
                                    : "border-transparent text-gray-500 hover:text-gray-700 rounded-none"
                                    }`}
                                onClick={() => setActiveTab("Overview")}
                            >
                                Overview
                            </Button>
                            <Button
                                variant={"ghost"}
                                className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors hover:bg-transparent ${activeTab === "Messages"
                                    ? "border-orange-500 text-orange-600 rounded-none"
                                    : "border-transparent text-gray-500 hover:text-gray-700 rounded-none"
                                    }`}
                                onClick={() => setActiveTab("Messages")}
                            >
                                Messages
                            </Button>
                            <Button
                                variant={"ghost"}
                                className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors hover:bg-transparent ${activeTab === "Board"
                                    ? "border-orange-500 text-orange-600 rounded-none"
                                    : "border-transparent text-gray-500 hover:text-gray-700 rounded-none"
                                    }`}
                                onClick={() => setActiveTab("Board")}
                            >
                                Board
                            </Button>
                        </div>
                    </div>
                </MotionContainer>
            </div>

            {/* Content Area */}
            <div
                className="w-full bg-gray-50 flex items-start justify-center"
                style={{ minHeight: "calc(100vh - 300px)" }}
            >
                {renderTabContent()}
            </div>
        </div>
    )
}

