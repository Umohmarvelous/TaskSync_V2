"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { ShimmerCard } from "./shimmer-card"

const events = [
    { date: 10, title: "12am Dinner", color: "bg-green-100 text-green-800" },
    { date: 10, title: "Dart Game?", color: "bg-purple-100 text-purple-800" },
    { date: 10, title: "Expense Accounting", color: "bg-blue-100 text-blue-800" },
    { date: 10, title: "Office Trip", color: "bg-yellow-100 text-yellow-800" },
    { date: 22, title: "Family Trip", color: "bg-yellow-100 text-yellow-800" },
    { date: 27, title: "Dinner", color: "bg-yellow-100 text-yellow-800" },
    { date: 28, title: "Dart Game?", color: "bg-blue-100 text-blue-800" },
    { date: 28, title: "+2 more", color: "bg-gray-100 text-gray-800" },
    { date: 29, title: "12.20pm Design Review", color: "bg-purple-100 text-purple-800" },
]

const viewModes = ["Month", "Week", "Day", "List"]

export function CalendarContent() {
    const [selectedView, setSelectedView] = useState("Month")
    const [showEventDetails, setShowEventDetails] = useState(false)

    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h1 className="text-xl font-semibold">August 2020</h1>
                    <Button variant="ghost" size="icon">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex space-x-2">
                    {viewModes.map((mode) => (
                        <div key={mode}>
                            <Button
                                variant={selectedView === mode ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedView(mode)}
                                className={selectedView === mode ? "bg-purple-100 text-purple-800 border-purple-200" : ""}
                            >
                                {mode}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar Grid */}
            <ShimmerCard shimmerIntensity="light" className="bg-white border">
                <div className="overflow-hidden">
                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 border-b">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="p-4 text-center font-medium text-gray-600 border-r last:border-r-0"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7">
                        {/* Empty cells for days before month starts */}
                        {Array.from({ length: 6 }, (_, i) => (
                            <div key={`empty-${i}`} className="h-24 border-r border-b last:border-r-0"></div>
                        ))}

                        {/* Days of the month */}
                        {daysInMonth.map((day) => {
                            const dayEvents = events.filter((event) => event.date === day)

                            return (
                                <div
                                    key={day}
                                    className="h-24 border-r border-b last:border-r-0 p-2 relative hover:bg-gray-50 transition-colors"
                                >
                                    <div className="text-sm font-medium mb-1">{day}</div>
                                    <div className="space-y-1">
                                        {dayEvents.slice(0, 2).map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className={`text-xs px-2 py-1 rounded ${event.color} cursor-pointer`}
                                                onClick={() => setShowEventDetails(true)}
                                            >
                                                {event.title}
                                            </div>
                                        ))}
                                        {dayEvents.length > 2 && <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ShimmerCard>

            {/* Event Details Modal */}
            {showEventDetails && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">February 10, 2020</h3>
                            <Button variant="ghost" size="icon" onClick={() => setShowEventDetails(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="space-y-2">
                            <Badge className="bg-green-100 text-green-800 block w-fit">12am Dinner</Badge>
                            <Badge className="bg-purple-100 text-purple-800 block w-fit">Dart Game?</Badge>
                            <Badge className="bg-blue-100 text-blue-800 block w-fit">Expense Accounting</Badge>
                            <Badge className="bg-yellow-100 text-yellow-800 block w-fit">Office Trip</Badge>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
