"use client"

import { Switch } from "@/components/ui/switch"
import { ChevronRight } from "lucide-react"
import { ShimmerCard } from "./shimmer-card"
import { MotionContainer } from "./motion-component"
import { useState } from "react"

const settingsNavigation = [
    { name: "My Profile", active: false },
    { name: "General", active: false },
    { name: "Preferences", active: false },
    { name: "Appearance", active: false },
    { name: "Password", active: false },
    { name: "Notifications", active: true },
]

const notificationSettings = [
    {
        category: "Notify me for...",
        items: [
            { name: "Daily productivity updates", enabled: true },
            { name: "New event created", enabled: true },
            { name: "When added to anew team", enabled: true },
        ],
    },
    {
        category: "Mobile push notifications",
        description: "Receive mobile notifications whenever a task requires your attention",
        items: [{ name: "", enabled: true }],
    },
    {
        category: "Desktop Notifications",
        description: "Receive mobile notifications whenever a task requires your attention",
        items: [{ name: "", enabled: true }],
    },
    {
        category: "Email Notification",
        description: "Receive mobile notifications whenever a task requires your attention",
        items: [{ name: "", enabled: true }],
    },
]

export function SettingsContent() {
    const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
        "Daily productivity updates": true,
        "New event created": true,
        "When added to anew team": true,
        "Mobile push notifications": true,
        "Desktop Notifications": true,
        "Email Notification": true,
    })

    const handleToggle = (key: string) => {
        setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div className="flex min-h-screen">
            {/* Settings Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 p-6">
                <div className="space-y-2">
                    {settingsNavigation.map((item) => (
                        <div
                            key={item.name}
                            className={`px-4 py-3 rounded-lg cursor-pointer transition-colors ${item.active ? "text-orange-500 font-medium" : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-50">
                <MotionContainer>
                    <div className="flex items-center space-x-2 mb-8">
                        <span className="text-gray-600">Settings</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 font-medium">Notifications</span>
                    </div>
                </MotionContainer>

                <div className="space-y-8 max-w-4xl pb-8">
                    {notificationSettings.map((section) => (
                        <ShimmerCard key={section.category} shimmerIntensity="light">
                            <div className="bg-white rounded-lg p-6 space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">{section.category}</h3>
                                {section.description && <p className="text-gray-600 text-sm">{section.description}</p>}

                                <div className="space-y-4">
                                    {section.category === "Notify me for..." ? (
                                        section.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                                            >
                                                <span className="text-gray-700">{item.name}</span>
                                                <Switch checked={toggleStates[item.name]} onCheckedChange={() => handleToggle(item.name)} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex items-center justify-between py-3">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900">{section.category}</h4>
                                                {section.description && <p className="text-gray-600 text-sm mt-1">{section.description}</p>}
                                            </div>
                                            <Switch
                                                checked={toggleStates[section.category]}
                                                onCheckedChange={() => handleToggle(section.category)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ShimmerCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
